import atob from 'atob';
import btoa from 'btoa';
/*
class SecureArray {
    constructor(array = undefined) {
        this.data = array ? array : [];
    }
    set data(array) {
        const secureString = atob(JSON.stringify(array))
        this.data.push(secureString)
    }
    get data() {
        const clear = this.data.map(item => {
            return JSON.parse(btoa(item))
        })
        return clear
    }
}
*/
/*
class SecureArray {
    constructor(array = undefined) {
        this.data = array ? array : [];
    }
    //stringify and btoa
    set data(array) {
        const secureString = atob(JSON.stringify(array))
        this.data.push(secureString)
    }
    //atob and parse
    get data() {
        const clear = this.data.map(item => {
            return JSON.parse(atob(item))
        })
        return clear;
        
    }
}
*/
class State {

    constructor(state) {
        this.fav = state.fav ? state.fav : [];
        this.history = state.history ? state.history : [];
        this.new = state.new ? state.new : [];
        this.dejavu = state.dejavu ? state.dejavu : [];
    }
   /*
   constructor(state) {
        this.fav = new SecureArray(state.fav) ? state.fav : new SecureArray();
        this.history = new SecureArray(state.history) ? state.history : new SecureArray();
        this.new = new SecureArray(state.new) ? state.new : new SecureArray();
        this.dejavu = new SecureArray(state.dejavu) ? state.dejavu : new SecureArray();
   }
*/
}
class LocalState {

    constructor()
    {
        this.state = this.loadState();
        this.syncState();
    }

    loadState()
    {
        // Load state from localStorage
        let state = localStorage.getItem('state');

        if (state !== null) {
            return new State(JSON.parse(state));
        }else {
            return new State({})
        }
    }
    syncState()
    {
        // Sync state to localStorage
        localStorage.setItem('state', JSON.stringify(this.state));
    }
    deleteState()
    {
        // Delete state from localStorage
        localStorage.removeItem('state');
    }
    attributeId()
    {
        // Recent
        //fav
        this.state.fav.forEach((element, index) => {
            if (element.id === undefined) {
                this.state.fav[index].id = this.generateUuid();
            }
        });
    }
    generateUuid()
    {
        // Generate UUID
        //pas sûr de ce charabia
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    isState()
    {
        // Check if state exist
        if (localStorage.getItem('state'))
        return true
        else
        return false
    }
}
class Activity {
    constructor()
    {
        this.local = new LocalState();
    }
    getActivity()
    {
        if (this.local.isState()) {
            return this.local.state;
        }
    }
   ///favorite
    addToFavorite(obj)
    {
        this.local.state.fav.push(obj);
        this.local.syncState();
    }
    getFavorite() {
        console.log(this.local.state.fav);
        return this.local.state.fav;
    }
    deleteFavorite()
    {
        this.local.state.fav = [];
        this.local.syncState();
    }
    //history
    addToHistory(obj) {
        this.local.state.history.push(obj);
        this.local.syncState();
    }
    getHistory() {
        return this.local.state.history;
    }
    deleteHistory() {
        this.local.state.history = [];
        this.local.syncState();
    }
    //nouveauté
    updateNew(obj) {
        this.local.state.new.push(obj);
        this.local.syncState();
    }
    getNew() {
        return this.local.state.new;
    }
    //activity
    deleteActivity()
    {
        this.local.deleteState();
    }

}
export default Activity;