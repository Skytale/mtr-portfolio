orion.dictionary.addDefinition('title', 'about', {
    type: String,
    label: 'Title'
});

orion.dictionary.addDefinition('image', 'about', {
    type: String,
    label: 'Image Path'
});

orion.dictionary.addDefinition('content', 'about',
    orion.attribute('froala')
);
