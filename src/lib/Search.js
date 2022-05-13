class Search
{
    constructor()
    {
        this.u = 'https://api.allorigins.win/get?url=';
        this.r = `https://manganato.com/search/story/`;

        this.keys = [`title`, `author`, `updated`, `image`, `link`]
        this.s_token = [`title=\\"`, `item-author\\" title=\\"`, `">Updated : `, `src=\\"`, `href=\\"`]
        this.e_token = [`\\"`, `\\"`, '</span>', `\\"`, `\\"`]

        this.ps = 'search-story-item'
        this.results = []
    }

    getResults()
    {
        return this.results;
    }

    async search(term)
    {
        let text, response;
        term = term.split(" ").join("_");
        response = await fetch(this.u + encodeURIComponent(this.r + term));
        text = await response.text();
        
        //Slice the portion we need
        let pos = 0, occ = this.countOccurences(text, this.ps)
        
        text = text.slice(text.indexOf(this.ps))
                
        for(var i = 0; i < occ * 2; i++) {
            pos = text.indexOf('</div>', pos) + 1 
        } 
                
        text = text.slice(0, pos)
        
        //Split the text and remove the first element (empty)
        text = text.split(this.ps)
        text.shift()
        
        //Manage all elements and continue
        this.results = text.map(e => this.manage(e));
    }

    manage(text)
    {
        //console.log(text)

        var result = {};
        for(var i = 0; i < this.keys.length; i++)
        {
            var sta = text.indexOf(this.s_token[i]) + this.s_token[i].length;
            var end = text.indexOf(this.e_token[i], sta + 1);
            result[this.keys[i]] = text.slice(sta, end);
        }

        return result;
    }

    countOccurences(text, subString)
    {   
        var n = 0, pos = 0
        while (true) 
        {
            pos = text.indexOf(subString, pos)
            if (pos >= 0) 
            {
                n++
                pos++
            } 
            else break;
        }

        return n;
    }

}
export default Search;