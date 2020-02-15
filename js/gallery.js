/*Name this external file gallery.js*/
//const previewImage = document.querySelector('img');
//const src = previewImage.getAttribute('src');

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    // const previewImage = document.querySelector('img');
    // const src = previewImage.getAttribute('src');
    //previewPic = src;
    const src = previewPic.getAttribute('src');
    const changeImage = document.getElementById('image');
    changeImage.style.backgroundImage = `url('` + src + `')`;
    changeImage.innerHTML = previewPic.alt;
    
    //console.dir(previewImage);
    
}

function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
        back to the orginal-image.  You can use the css code to see what that original URL was
        
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    const noImage = document.getElementById('image');
    const imagePlaceholder = 'Hover over an image below to display here.';
    noImage.style.backgroundImage = `url('')`;
    noImage.innerHTML = imagePlaceholder;

}