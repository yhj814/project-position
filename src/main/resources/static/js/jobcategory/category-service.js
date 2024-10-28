const jobcategoryService = (() => {
    const getCategoryA = async (callback) => {
        const response = await fetch("/api/jobcategories/categoryA");
        const categoriesA = await response.json();

        if(callback){
            callback(categoriesA)
        }
    }
    const getCategoryB = async (categoryAId, callback) => {
        const response = await fetch(`/api/jobcategories/categoryB/${categoryAId}`);
        const categoriesB = await response.json();

        if (callback) {
            callback(categoriesB);
        }
    };

    return{getCategoryA:getCategoryA, getCategoryB:getCategoryB};
})()

