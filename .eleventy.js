module.export = config => {
    eleventyConfig.addFilter("animal", require("./_includes/postlist.njk"));
    config.addFilter('animal', arr => {
        const fav = post => post.data.animal;
        return arr.filter(fav);
    })
}
