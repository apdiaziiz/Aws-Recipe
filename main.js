let stock = document.getElementById('recipe');
let btn = document.getElementById('btn');

// function get data from url

const getRecipeList = async (e)=> {
    e.preventDefault();
    let inputText = document.getElementById('form_control').value;
    let recipies = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputText}`)
    .then(info=> info.json())
    .then(recipe => recipe.meals);
    let local = "";
    if(recipies){
        
        recipies.map((recipe)=> {
            if (recipe.strMeal) {
                local += `
                <div class="recipe">
                    <img src=${recipe.strMealThumb}>
                    <div class="desc">
                        <h2>${recipe.strMeal.length < 15 ? 
                            recipe.strMeal : 
                            recipe.strMeal.substring(0,22)}....</h2>
                        <input type="submit" value="View" id="btn"/>
                    </div>  
                </div>\n`;
                stock.innerHTML = local;
            } 
        })
    } else {
        stock.innerHTML = "!Oops it is not recipe availabe.."
    }
}

btn.addEventListener('click', getRecipeList);