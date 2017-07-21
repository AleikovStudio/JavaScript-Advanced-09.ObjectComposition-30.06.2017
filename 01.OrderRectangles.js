function orderRectangles(arr) {

    let rectArr = [];

    for (let arg of arr) {
        rectArr.push(createRect(arg[0], arg[1]));
    }

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
                // if result = 0 (false), return the difference, if that is 0, return false.
            }
        };
        return rect;
    }

    rectArr.sort((a, b) => a.compareTo(b));
    return rectArr;

}

console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));