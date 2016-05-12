var parseSize = function(size) {
    var unitRe = /([\d|\.]+)([a-z]+)$/;
    var split = unitRe.exec(size);
    if (split && split.length === 3) {
        var num = parseFloat(split[1]);
        var unit = split[2];
        return {num: num, unit: unit};
    }
    return null;
};

var allSidesC = function($amts) {
    if (!$amts) { return false; }
    var sizes = $amts.split(" ");
    for (var i = 0; i < sizes.length; i++) {
        var size = parseSize(sizes[i].trim());
        if (!size || !(size.unit == "px" || size.unit == "em")) {
            return false;
        }
    }
    return true;
};

var oneSideC = function($amt) {
    if (!$amt) { return false; }
    var size = parseSize($amt);
    return size && size.unit == "px" || size.unit == "em";
};
    
staticTest($._("Add borders"), function() {
    var result = null;
    var descrip = $._("This webpage displays a gallery of photos of boxer dogs. In this first step, add a border to all of the photos. Try and make it look like a photo frame, if you can.");
    var displayP = "";
    
    var addedBorderP = ".photo { border: $value; }";
    var addedIdsP    = "img[id]";
    var borderOnGalleryP = ".photo-gallery { border: _; }";
    var borderStyleP = ".photo { border-style: _; }";
    
    var borderThicknessC = function($value) {
        var $thickness = $value.split(" ")[0];
        return ($thickness && parseSize($thickness)) || false;
    };
    
    var borderStyleC = function($value) {
        var splitStyle = $value.split(" ");
        if (splitStyle.length < 2) {
            return false;
        }
        var $style = splitStyle[1];
        if ($style.trim) { $style = $style.trim(); }
        var styles = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
        for (var i = 0; i < styles.length; i++) {
            if (styles[i] === $style) {
                return true;
            }
        }
        return false;
    };
    
    result = cssMatch(addedBorderP);
    if (passes(result)) {
        if (!passes(cssMatch(addedBorderP, borderThicknessC))) {
            result = fail($._("Hm, is your border thickness a valid value? It should be something like '2px' with a space after (not a comma)."));
        } else if (!passes(cssMatch(addedBorderP, borderStyleC))) {
            result = fail($._("Hm, is your border style a valid value?"));
        }
    } else {
        if (htmlMatches(addedIdsP)) {
            result = fail($._("Did you add ids to the images? That's not necessary, you should be styling based on their `class` instead."));
        } else if (cssMatches(borderOnGalleryP)) {
            result = fail($._("The border should be on the images, not the gallery div."));
        } else if (cssMatches(borderStyleP)) {
            result = fail($._("Can you use the shorthand `border` property in this challenge instead?"));
        }
    }
    
    assertMatch(result, descrip, displayP);
});


staticTest($._("Add margin"), function() {
    var result = null;
    var descrip = $._("The photos look a bit too close to each other. Add margin to them, either on all sides or just the sides that matter to separate them.");
    var displayP = "";
    
    var addedMarginAllP = ".photo { margin: $amts; }";
    var addedMarginRightP = ".photo { margin-right: $amt; }";
    var addedMarginLeftP = ".photo { margin-left: $amt; }";
    
    var paddingOnPicsP = ".photo { padding: _; }";
    
    result = anyPass(cssMatch(addedMarginAllP),
                     cssMatch(addedMarginRightP),
                     cssMatch(addedMarginLeftP));
    
    if (passes(result)) {
        if (!cssMatches(addedMarginAllP, allSidesC) &&
            !cssMatches(addedMarginRightP, oneSideC) &&
            !cssMatches(addedMarginLeftP, oneSideC)) {
            result = fail($._("Hm, what value are you using for your margin? It should be something like '6px'."));
        }
    } else {
        if (cssMatches(paddingOnPicsP)) {
            result = fail($._("You should use `margin`, not `padding`, since we want to change how far away the images are from each other, not how far they are from their border."));
        }
    }
    assertMatch(result, descrip, displayP);
});

staticTest($._("Add padding"), function() {
    var result = null;
    var descrip = $._("The photos are too close to the side of the gallery div, and it looks weird. Add padding around all sides of the gallery div so that it looks better.");
    var displayP = "";
    
    var addedPaddingAllP = ".photo-gallery { padding: $amts; }";
    
    var paddingOnPicsP = ".photo { padding: _; }";
    
    result = anyPass(cssMatch(addedPaddingAllP));
    
    if (passes(result)) {
        if (!cssMatches(addedPaddingAllP, allSidesC)) {
            result = fail($._("Hm, what value are you using for your padding? It should be something like '6px'."));
        }
    } else {
        if (cssMatches(paddingOnPicsP)) {
            result = fail($._("Putting padding on <img>s won't achieve what we want - the padding should be on the element that contains them, the gallery div."));
        } 
    }
    assertMatch(result, descrip, displayP);
});
