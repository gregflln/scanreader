class Pages
{
    ///Problème ! Ne fonctione plus !
    constructor(url)
    {
        this.url = url;
        this.results = [];
    }

    async getPages()
    {
        let text, response;
        response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(this.url));
        text = await response.text();
        this.manage(text);
    }

    manage(text)
    {
        var token = `<div class=\\"container-chapter-reader\\">`, pos = 0;
        var sub = `<img src=\\"`;

        while(true)
        {
            pos = text.indexOf(sub, pos)
            if(pos >= 0)
            {
                pos += 10

                var sta, end;
                sta = text.indexOf(sub, pos) + sub.length;
                end = text.indexOf(`\\"`, sta);

                var tempT = text.slice(sta, end);
                if(tempT.indexOf(`manganato`) >= 0)
                {
                    break;
                }

                this.results.push(tempT);
            }
            else break;
        }
        console.log(this.results)
    }
}

export default Pages;