import Activity from "./Activity.js";
import Manga from "./Manga.js";
////////////
// Ce script sert a trouver les nouveautés
//ne se servir que de getNew()
////////////
class FindNew {
    constructor() {
        this.activity = new Activity();
        this.crawler = new Manga();
        this.fav = [];
        this.fetched = [];
        this.new = [];
    }
    async fetchMangas() {
        /*
        this.fetched = this.fav.map(async(manga, index) => {
            //const crawler = new Manga(manga.link);
            //await crawler.getManga();
            await this.wait(1000);
            console.log(`fetching terminate no${index}..`);
            //return crawler.results;
        });
        */
       
        this.fetched = await Promise.all(this.fav.map(async(manga, index) => {
            const crawler = new Manga(manga.link);
            await crawler.getManga();
            await this.wait(1000);
            console.log(`fetching terminate no${index}..`);
            return crawler.results;
        }))
    }
        
    getFav() {
        this.fav = this.activity.getFavorite();
    }
    compareAndPush() {
        this.new = this.fetched.filter((manga, index) => {
            console.log(manga.updated, this.fav[index].updated);
            const dateFetch = this.DateToTimestamp(manga.updated)
            const dateFav = this.DateToTimestamp(this.fav[index].updated)
            if (dateFetch > dateFav) {
                return true
            }else {
                return false
            }
        })
    }
    //convertie la date des manga en format valide puis en timestamp
    DateToTimestamp(date) {
        const part = date
        .replace(',', ' ')
        .replace('-', ' ')
        .split(' ');
        return Date.parse(`${part[1]} ${part[0]} ${part[2]} ${part[5]}:00`);
    }
    pushToActivity() {
        const activity = new Activity();
        activity.updateNew(this.new);
    }
    //cette méthode est la seule à être appelée
    getNew() {
        //recupere les favoris
        this.getFav();
        //fetch les mangas
        this.fetchMangas();
        //compare les date de mise a jour
        this.compareAndPush();
        //push les nouveautés dans le localstorage
        this.pushToActivity();
    }
    //attend et evite que le server de mangato bloque peut être
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
export default FindNew;