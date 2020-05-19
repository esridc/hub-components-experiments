import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Metadata Form', () => {
        const spec = knobs.select('spec', ["arcgis", 
                                            "team", "user", 
                                            "additionalDocumentation", 
                                            "attribute", 
                                            "citation", 
                                            "contact", 
                                            "distribution", 
                                            "funding",
                                            "geometry",
                                            "lineage", 
                                            "metadataRepository", 
                                            "measure",
                                            "onlineResource",
                                            "responsibility",
                                            "resourceInfo",
                                            "timePeriod",
                                            "usage",
                                        ], "arcgis");  
        const locale = knobs.select('locale', ['en', 'es'], 'en');

        mainEl.innerHTML = `<metadata-form spec="${spec}" locale="${locale}"></metadata-form>`
                
        return mainEl;
    }, { notes: readme });
  }