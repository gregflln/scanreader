class Chapters
{
    constructor(url)
    {
        this.url = url;
        this.results = [];
    }

    async getChapters()
    {
        let text, response;
        response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(this.url));
        text = await response.text();
        this.manage(text);
    }

    manage(text)
    {
        var sub = `<li class=\\"a-h\\">`, pos = 0;

        //console.log(text)

        while(true)
        {
            pos = text.indexOf(sub, pos)
            if(pos >= 0)
            {
                pos += 10
                let result = {
                    title : "",
                    date : "",
                    url : ""
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

                this.results.push(result);
            }
            else break;
        }
        console.log(this.results)
    }
}

export default Chapters;