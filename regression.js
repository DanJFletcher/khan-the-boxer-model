[{
    code: "<style>.photo { border: 1px, solid red; }</style>",
    steps: ["Hm, is your border thickness a valid value? It should be something like '2px' with a space after (not a comma)."]
},{
    code: "<style>.photo { border: 3px ; }</style>",
    steps: ["Hm, is your border style a valid value?"]
},{
    code: "<style>.photo { border-style: dashed; }</style>",
    steps: ["Can you use the shorthand `border` property in this challenge instead?"]
},  {
    code: "<style>.photo { border: 1px sold red; }</style>",
    steps: ["Hm, is your border style a valid value?"]
},{
    code: "<style>.photo-gallery { border: 1px sold red; }</style>",
    steps: ["The border should be on the images, not the gallery div."]
},  {
    code: "<style>#cute { border: 1px sold red; }</style><img id='cute'>",
    steps: ["Did you add ids to the images? That's not necessary, you should be styling based on their `class` instead."]
},{
    code: "<style>.photo { border: 1px solid red; }</style>",
    steps: ["pass"]
},{
    code: "<style>.photo { border: 1px solid red; margin: 10p; }</style>",
    steps: ["pass", "Hm, what value are you using for your margin? It should be something like '6px'."]
}, {
    code: "<style>.photo { border: 1px solid red; margin-left: 10p; }</style>",
    steps: ["pass", "Hm, what value are you using for your margin? It should be something like '6px'."]
},{
    code: "<style>.photo { border: 1px solid red; padding: 10px; }</style>",
    steps: ["pass", "You should use `margin`, not `padding`, since we want to change how far away the images are from each other, not how far they are from their border."]
},  {
    code: "<style>.photo { border: 1px solid red; margin: 10px; }</style>",
    steps: ["pass", "pass"]
}, {
    code: "<style>.photo { border: 1px solid red; margin-left: 10px; }</style>",
    steps: ["pass", "pass"]
},  {
    code: "<style>.photo { border: 1px solid red; margin-right: 10px; }</style>",
    steps: ["pass", "pass"]
},  {
    code: "<style>.photo-gallery { } .photo { border: 1px solid red; margin-right: 10px; padding: 10px; }</style>",
    steps: ["pass", "pass", "Putting padding on <img>s won't achieve what we want - the padding should be on the element that contains them, the gallery div."]
}, {
    code: "<style>.photo-gallery { padding: 10p } .photo { border: 1px solid red; margin-right: 10px; }</style>",
    steps: ["pass", "pass", "Hm, what value are you using for your padding? It should be something like '6px'."]
}, {
    code: "<style>.photo-gallery { padding: 10px; } .photo { border: 1px solid red; margin-right: 10px; }</style>",
    steps: ["pass", "pass", "pass"]
}, {
    code: "<style>.photo-gallery { padding: 10px; } .photo { border: 1px solid red; margin-right: 10px; }</style>",
    steps: ["pass", "pass", "pass"]
}]