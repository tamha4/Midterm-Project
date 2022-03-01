let products = [
    {
        name:"God of War",
        price:"19.99",
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600_sd.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
        Description: "A god worshipped as giving victory in war",
        platform:"blue"
    },
    {
        name:"Killer Instinct",
        price:"14.99",
        image:"https://img.g2a.com/323x433/1x1x0/killer-instinct-steam-gift-global/5a17fa1aae653ab8e0270d62",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png",
        Description: "An aggressive tenacious urge for domination in a struggle to attain a set goal.",
        platform:"red"
    },
    {
        name:"Donkey Kong",
        price:"49.99",
        image: "https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/2569449-91%2Bxzjhgtsl._sl1500_.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png",
        Description: "A large, muscular ape in appearance with a red tie that sports his initials.",
        platform: "green"
    }
];

let mainBody = document.querySelector("body");
let rootBody = document.createElement("div");
rootBody.style.position = "relative";
rootBody.classList.add("mainBody");
let firsPopup = document.createElement("div");
firsPopup.style.width = "100%";
firsPopup.classList.add("popUp");
firsPopup.style.height = "200hv";
firsPopup.style.backgroundColor = "#5c8a8a";
firsPopup.style.opacity = "0.5";
let imgContainer = document.createElement("div");
imgContainer.style.position = "absolute";
imgContainer.style.left = "50%";
imgContainer.style.top = "50%";
imgContainer.style.transform = "translate(-50%, -50%)";
let image = document.createElement("img");
image.src = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600_sd.jpg";
image.style.display = "flex";
image.style.width = "50%";
image.style.margin = "auto";

let firstName = document.createElement("h1");
firstName.textContent = products[0].name;
firstName.style.textAlign = "center";

let productPrice = document.createElement("h2");
productPrice.textContent = "$"+products[0].price;
productPrice.style.textAlign = "center";

let productDescription = document.createElement("h3");
productDescription.textContent = products[0].Description;
productDescription.style.textAlign = "center";

let productPlatform = document.createElement("h4");
productPlatform.textContent = products[0].platform;
productPlatform.style.textAlign = "center";
productPlatform.style.color = "blue";

// image.style.height = "250px";
// image.style.width = "250px";




imgContainer.appendChild(image);
imgContainer.appendChild(firstName);
imgContainer.appendChild(productPrice);
imgContainer.appendChild(productDescription);
imgContainer.appendChild(productPlatform);
imgContainer.style.display = "none";

firsPopup.appendChild(imgContainer);


//second pic

let secondContainer = document.createElement("div");
secondContainer.style.position = "absolute";
secondContainer.style.top = "50%";
secondContainer.style.left = "50%";
secondContainer.style.transform = "translate(-50%,-50%)";

let image2 = document.createElement("img");
image2.src = products[1].image;
image2.style.display = "flex";
image2.style.width = "50%";
image2.style.margin = "auto";

let secondName = document.createElement("h1");
secondName.textContent = products[1].name;
secondName.style.textAlign = "center";

let productPrice2 = document.createElement("h2");
productPrice2.textContent = "$"+products[1].price;
productPrice2.style.textAlign = "center";

let productDescription2 = document.createElement("h3");
productDescription2.textContent = products[1].Description;
productDescription2.style.textAlign = "center";

let productPlatform2 = document.createElement("h4");
productPlatform2.textContent = products[1].platform;
productPlatform2.style.color = "red";
productPlatform2.style.textAlign = "center";

secondContainer.appendChild(image2);
secondContainer.appendChild(secondName)
secondContainer.appendChild(productPrice2);
secondContainer.appendChild(productDescription2);
secondContainer.appendChild(productPlatform2);
secondContainer.style.display = "none";
firsPopup.appendChild(secondContainer);

// Third Pic


let thirdContainer = document.createElement("div");
thirdContainer.style.position = "absolute";
thirdContainer.style.top = "50%";
thirdContainer.style.left = "50%";
thirdContainer.style.transform = "translate(-50%,-50%)";

let image3 = document.createElement("img");
image3.src = products[2].image;
image3.style.display = "flex";
image3.style.width = "50%";
image3.style.margin = "auto";

let thirdName = document.createElement("h1");
thirdName.textContent = products[2].name;
thirdName.style.textAlign = "center";

let productPrice3 = document.createElement("h2");
productPrice3.textContent = "$"+products[2].price;
productPrice3.style.textAlign = "center";

let productDescription3 = document.createElement("h3");
productDescription3.textContent = products[2].Description;
productDescription3.style.textAlign = "center";

let productPlatform3 = document.createElement("h4");
productPlatform3.textContent = products[2].platform;
productPlatform3.style.color = "green";
productPlatform3.style.textAlign = "center";


thirdContainer.appendChild(image3);
thirdContainer.appendChild(thirdName);
thirdContainer.appendChild(productPrice3);
thirdContainer.appendChild(productDescription3);
thirdContainer.appendChild(productPlatform3);
thirdContainer.style.display = "none";
firsPopup.appendChild(thirdContainer);
firsPopup.style.display = "none";

mainBody.appendChild(firsPopup);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Pop Up

let newDiv = document.createElement("div");
// document.body.appendChild(newDiv);
rootBody.appendChild(newDiv);
rootBody.appendChild(firsPopup);
for(obj of products) {
    let innerDiv = document.createElement("div");
    newDiv.appendChild(innerDiv);
    innerDiv.classList.add("product");
    innerDiv.style.position = "relative";
    let originalImage = document.createElement("img");
    let logo = document.createElement("img");
    originalImage.src = obj.image;
    logo.src = obj.image2;
    logo.style.position = "absolute";
    logo.style.width = "50px";
    logo.style.height = "50px";
    logo.style.top = "0px";
    logo.style.right = "0px";

    innerDiv.style.borderColor = obj.platform;

   innerDiv.onclick = function (e){
       let clickImageLink = e.path[0];
       if(clickImageLink.src === image.src) {
           firsPopup.style.display = "block";
           imgContainer.style.display = "block";
           secondContainer.style.display = "none";
           thirdContainer.style.display = "none";
           mainBody.style.flexDirection = "row-reverse";
       }
       else if(clickImageLink.src === image2.src) {
           firsPopup.style.display = "block";
           imgContainer.style.display = "none";
           secondContainer.style.display = "block";
           thirdContainer.style.display = "none";
       }
       else if(clickImageLink.src === image3.src) {
           firsPopup.style.display = "block";
           imgContainer.style.display = "none";
           secondContainer.style.display = "none";
           thirdContainer.style.display = "block";
       }



   }

   firsPopup.onclick = function () {
       firsPopup.style.display = "none";
       imgContainer.style.display = "none";
       secondContainer.style.display = "none";
       thirdContainer.style.display = "none";
   }


    innerDiv.appendChild(originalImage);
    innerDiv.appendChild(logo);

    let productPrice = document.createElement("p");
    let text = "$"+obj.price;
    productPrice.append(text);
    innerDiv.append(productPrice);

    mainBody.appendChild(rootBody);


}


