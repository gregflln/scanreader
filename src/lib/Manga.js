class Manga
{
    constructor(url)
    {
        this.url = url;
        this.results = 
        {
            title : "",
            desc : "",
            author : "",
            status : "",
            genres : [],
            updated : "",
            chapters : [],
            link : this.url,
            encodedLink : encodeURIComponent(this.url)
            //ajout de link
        }
    }
    //EDIT ,j'ai changé de getChapter a getManga
    async getManga()
    {
        let text, response;
        response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(this.url));
        text = await response.text();
        this.manage(text);
    }

    manage(text)
    {
        var sub = `<li class=\\"a-h\\">`, pos = 0;

        while(true)
        {
            pos = text.indexOf(sub, pos)
            if(pos >= 0)
            {
                pos += 10
                let result = {
                    title : "",
                    date : "",
                    url : "",
                    prec : "",
                    next : ""
                }

                var sta, end;
                sta = text.indexOf(`href=\\"`, pos) + `href=\\"`.length;
                end = text.indexOf(`\\"`, sta);
                result.url = text.slice(sta, end);

                var t = text.indexOf(`title=\\"`, pos);
                sta = text.indexOf(`>`, t) + `>`.length;
                end = text.indexOf(`<`, sta);
                result.title = text.slice(sta, end);

                sta = text.indexOf('title=\\"', sta) + 'title=\\"'.length;
                end = text.indexOf(`\\"`, sta);
                result.date = text.slice(sta, end);

                this.results.chapters.push(result);
            }
            else break;
        }

        //PREC & NEXT
        if(this.results.chapters.length > 1)
        {
            for(let i = 0; i < this.results.chapters.length; i ++)
            {
                switch(i)
                {
                    case 0 :
                        this.results.chapters[i].next = this.results.chapters[i + 1].url;
                        break;
                    case this.results.chapters.length - 1 :
                        this.results.chapters[i].prec = this.results.chapters[i - 1].url;
                        break;
                    default :
                        this.results.chapters[i].prec = this.results.chapters[i - 1].url;
                        this.results.chapters[i].next = this.results.chapters[i + 1].url;
                        break;
                }
            }
        }

        //DESC
        sta = text.indexOf(`<h3>Description :</h3>\\n`) + `<h3>Description :</h3>\\n`.length;
        end = text.indexOf(`</div>`, sta); 
        this.results.desc = text.slice(sta, end);
        
        //TITLE 
        sta = text.indexOf(`<h1>`) + `<h1>`.length;
        end = text.indexOf(`</h1>`, sta);
        this.results.title = text.slice(sta, end); 

        //AUTHOR
        pos = text.indexOf(`<td class=\\"table-value\\">`) + `<td class=\\"table-value\\">`.length;
        pos = text.indexOf(`<td class=\\"table-value\\">`, pos) + `<td class=\\"table-value\\">`.length + 10;
        sta = text.indexOf(`'>`, pos) + `'>`.length;
        end = text.indexOf(`</a>`, sta); 
        this.results.author = text.slice(sta, end);

        //STATUS
        sta = text.indexOf(`<td class=\\"table-value\\">`, sta) + `<td class=\\"table-value\\">`.length;
        end = text.indexOf(`</td>`, sta);
        this.results.status = text.slice(sta, end);

        //GENRES
        sta = text.indexOf(`<td class=\\"table-value\\">`, sta) + `<td class=\\"table-value\\">`.length;
        end = text.indexOf(`</td>`, sta);
        var t = text.slice(sta, end).split(`</a> -`);
        t.forEach((e, ind) => 
        {
            if(ind == t.length - 1)
            {
                sta = e.indexOf(`'>`) + `'>`.length;
                end = e.indexOf(`</a>`, sta);
                this.results.genres.push(e.slice(sta, end));
            }
            else 
            {
                this.results.genres.push(e.slice(e.indexOf(`'>`) + `'>`.length));
            }
        });
        
        //UPDATED
        pos = text.indexOf(`<div class=\\"story-info-right-extent\\">`);
        sta = text.indexOf(`<span class=\\"stre-value\\">`) + `<span class=\\"stre-value\\">`.length;
        end = text.indexOf(`</span>`, sta);
        this.results.updated = text.slice(sta, end);

        //console.log(this.results)
    }
}

export default Manga;