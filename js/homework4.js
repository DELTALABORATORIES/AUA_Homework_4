//Function for printing an upside-down triangle to the console of the given height
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

//Function for returning the result of multiplying the base times itself n time

function pow(base , n){

    function result(lastNumber , n){

        if (n <= 0){
            console.log(lastNumber);
            return ' ';
        }

        lastNumber = lastNumber * base;

        result(lastNumber , n-2);
    }

    result(base , n);
}

//pow(2 , 3);

//Function for reversing a string with recursion

function reverse(string){

    const stringLength = string.length;
    const lastElementPosition = stringLength - 1;


    function result(lastResult , num){

        if (num < 0){
            console.log(lastResult);
            return ' ';
        }

        const  de = lastResult + string[num];
        result(de , num - 1)
    }

    result( ' ', lastElementPosition);

}

//reverse('Hello');

//Function for drawing an n by n checkerboard on the screen

function checkboard(size){

    function rowGenerator(starsCount) {
        //Generates needed amount of stars for each row

        if(starsCount <= 0){
            return ' ';
        }

        const stars = "* " + rowGenerator(starsCount - 1);
        return stars;
    }

    const row = rowGenerator(size);

    function result(rowNumber , rowType){

        if (rowNumber <= 0){
            return ' ';
        }
        else if(rowType === 0){
            console.log(row);
            const rowTypeChanged = 1;
            result(rowNumber -1 , rowTypeChanged);
        }
        else {
            console.log(' ' + row);
            const rowTypeChanged = 0;
            result(rowNumber -1 , rowTypeChanged);
        }

    }

    result(size , 0);

}

//checkboard(8);

//Function for drawing a sailboat of that height on the screen using '*' characters

function sailboat(size){

    const mastHeight = size + 4;
    const bodySize = mastHeight + 20;
    const mastMargin = mastHeight + 7;

    function spaceGenerator(spaceCount){
        //Generates needed amount of spaces
        if (spaceCount <= 0){
            return ' ';
        }

        const space = ' ' + spaceGenerator(spaceCount - 1);
        return space;
    }

    function rowGenerator(lastRow , starsCount , height) {
        //Generates needed amount of stars for each row

        const space = spaceGenerator(mastMargin);
        if(height < starsCount){
            return ' *';
        }
        else if(starsCount === 0){
            const stars = space + lastRow + "* ";
            console.log(stars);
            rowGenerator(stars , starsCount+1 , height);
        }
        else{
            const stars = lastRow + "* ";
            console.log(stars);
            rowGenerator(stars , starsCount + 1 , height);
        }
        return  space + '*';
    }

    function mast(){
        console.log(rowGenerator('' ,0 ,mastHeight));
    }

    function body(size){

            const bodyHeight = size;

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

                if (starCount <= bodyHeight * 0.6){
                    return ' ';
                }

                if(starCount === bodyHeight){

                    const data = rowGenerator(starCount);
                    console.log(data);

                    createTriangle(starCount - 2);
                }
                else if(starCount === 1){

                    const spaceCount = (bodyHeight - starCount)/2 +1;
                    const spaces = spaceGenerator(spaceCount);

                    const data = rowGenerator(starCount);
                    console.log(spaces + data);
                }
                else{

                    const spaceCount = (bodyHeight - starCount)/2;
                    const spaces = spaceGenerator(spaceCount);

                    const data = rowGenerator(starCount);
                    console.log(spaces + data);

                    createTriangle(starCount - 2);
                }
            }

            createTriangle(bodyHeight);

    }

    mast();
    body(bodySize);
}

sailboat(10);