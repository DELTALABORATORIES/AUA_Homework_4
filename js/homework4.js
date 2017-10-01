//This Function prints an upside-down triangle to the console of the given height
function triangleStars(triangleHeight){

    const firstRowStars = 1 + (triangleHeight - 1)*2;

    function spaceGenerator(spaceCount){
        //Generates needed amount of spaces
        if (spaceCount <= 0){
            return ' ';
        }

        const space = ' ' + spaceGenerator(spaceCount - 1);
        return space;
    }

    function rowGenerator(starsCount) {
        //Generates needed amount of stars for each row

        if(starsCount <= 0){
            return ' ';
        }

        const stars = "* " + rowGenerator(starsCount - 1);
        return stars;
    }

    function createTriangle(starCount){
        //Final function that returns the triangle

        if (starCount <= 0){
            return ' ';
        }

        if(starCount === firstRowStars){

            const data = rowGenerator(starCount);
            console.log(data);

            createTriangle(starCount - 2);
        }
        else if(starCount === 1){

            const spaceCount = (firstRowStars - starCount)/2 +1;
            const spaces = spaceGenerator(spaceCount);

            const data = rowGenerator(starCount);
            console.log(spaces + data);
        }
        else{

            const spaceCount = (firstRowStars - starCount)/2;
            const spaces = spaceGenerator(spaceCount);

            const data = rowGenerator(starCount);
            console.log(spaces + data);

            createTriangle(starCount - 2);
        }
    }

    createTriangle(firstRowStars);

}

//triangleStars(5);