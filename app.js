

var link3 = document.createElement("link");
link3.href= "https://cdn.jsdelivr.net/gh/abhicodelink/abhix-select0.1@master/app.min.css";
link3.rel = "stylesheet";
link3.type="text/css";
document.head.appendChild(link3);

var link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.css";
    link.rel = "stylesheet";
    link.type = "text/css";
var link2 = document.createElement("link");
 link2.href = "https://fonts.googleapis.com/css?family=Abel|Poppins|Abril+Fatface|Acme|Alegreya|Alegreya+Sans|Anton|Archivo|Archivo+Black|Archivo+Narrow|Arimo|Arvo|Asap|Asap+Condensed|Bitter|Bowlby+One+SC|Bree+Serif|Cabin|Cairo|Catamaran|Crete+Round|Crimson+Text|Cuprum|Dancing+Script|Dosis|Droid+Sans|Droid+Serif|EB+Garamond|Exo|Exo+2|Faustina|Fira+Sans|Fjalla+One|Francois+One|Gloria+Hallelujah|Hind|Inconsolata|Indie+Flower|Josefin+Sans|Julee|Karla|Lato|Libre+Baskerville|Libre+Franklin|Lobster|Lora|Mada|Manuale|Maven+Pro|Merriweather|Merriweather+Sans|Montserrat|Montserrat+Subrayada|Mukta+Vaani|Muli|Noto+Sans|Noto+Serif|Nunito|Open+Sans|Open+Sans+Condensed:300|Oswald|Oxygen|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|PT+Serif|Pacifico|Passion+One|Pathway+Gothic+One|Play|Playfair+Display|Questrial|Quicksand|Raleway|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Ropa+Sans|Rubik|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Sedgwick+Ave|Sedgwick+Ave+Display|Shadows+Into+Light|Signika|Slabo+27px|Source+Code+Pro|Source+Sans+Pro|Spectral|Titillium+Web|Ubuntu|Ubuntu+Condensed|Varela+Round|Vollkorn|Work+Sans|Yanone+Kaffeesatz|Zilla+Slab|Zilla+Slab+Highlight" ;
  link2.rel= "stylesheet";
  link2.type= "text/css";
    document.head.appendChild(link);
    document.head.appendChild(link2);



document.addEventListener("DOMContentLoaded", function() {

  class CustomSelect extends HTMLElement {
    constructor() {
      super();
      
      var self = this;


      if (self.hasAttribute('x-swidth')){
        var width = self.getAttribute('x-swidth');
  self.style.width = width;
  var selector = self.querySelector('abhix-selector');
  selector.style.width = width;
  var content = self.querySelector('abhix-sc');
content.style.width = width;
      }
      else {
        self.style.width = "100%";
        var selector = self.querySelector('abhix-selector');
        var content = self.querySelector('abhix-sc');
        selector.style.width = "100%";
        content.style.width = "100%";
      }
    
      if (self.hasAttribute('x-sheight')){
        var height = self.getAttribute('x-sheight');
        self.style.height = height;
        var selector = self.querySelector('abhix-selector');
 selector.style.height = height;
      }
      else {
        self.style.height = "50px";
        var selector = self.querySelector('abhix-selector');
        selector.style.height = "50px";
      }
      if (self.hasAttribute('x-sFontSize')){
        var size = self.getAttribute('x-sFontSize');
        self.style.fontSize = size;
      }
      else {
        self.style.sfontSize = "18px";
      }
      if (self.hasAttribute('x-sFontWeight')){
        var weight = self.getAttribute('x-sFontWeight');
        self.style.fontWeight = weight;
      }
      else {
        self.style.fontWeight = "600";
      }
      if (self.hasAttribute('x-sFontFamily')){
        var family = self.getAttribute('x-sFontFamily');
        self.style.fontFamily = family;
      }
      else {
        self.style.fontFamily = "'Poppins',sans-serif";
      }
      
      
    }
    
    
  }
  
  customElements.define("abhix-select", CustomSelect);
  
  document.addEventListener("click", () => {
    const customSelects = document.querySelectorAll(".custom-select-options");
    customSelects.forEach((customSelect) => {
      customSelect.classList.remove("show");
    });
  });
  
  
  class CustomSelector extends HTMLElement {
    constructor(){
      super();
      
      const self = this;
      
          self.h3 = document.createElement("h3");
          
          if (self.hasAttribute('x-selector')){
            var text = self.getAttribute('x-selector');
            self.h3.innerHTML = text;
            self.appendChild(self.h3);
          }
          self.i = document.createElement("i");
          
          self.i.classList.add("fa-solid","fa-caret-down","selector-caret");
          self.appendChild(self.i);
          
          
    

          if (self.hasAttribute('x-sbackgroundColor')){
            var bg = self.getAttribute('x-sbackgroundColor');
            self.style.backgroundColor = bg;
          }
          else {
            self.style.backgroundColor = "#fff";
          }
          if (self.hasAttribute('x-sColor')){
            var color= self.getAttribute('x-sColor');
            self.style.color = color;
          }
          else {
            self.style.color = "#333";
          }

          self.addEventListener('mouseenter' , () => {
            if (self.hasAttribute('x-sHover')){
             var hover = self.getAttribute('x-sHover');
             self.style.backgroundColor = hover;
            }
            else {
             self.style.backgroundColor = "rgba(0,0,0,0.1)";
            }
           });
           self.addEventListener('mouseleave' , () => {
            if (self.hasAttribute('x-sbackgroundColor')){
             var bg = self.getAttribute('x-sbackgroundColor');
             self.style.backgroundColor = bg;
            }
            else {
             self.style.backgroundColor = "#fff";
            }
           });
           if (self.hasAttribute('x-sFontSize')){
            var size = self.getAttribute('x-sFontSize');
            self.style.fontSize = size;
          }
          else {
            self.style.sfontSize = "18px";
          }
          if (self.hasAttribute('x-sFontWeight')){
            var weight = self.getAttribute('x-sFontWeight');
            self.style.fontWeight = weight;
          }
          else {
            self.style.fontWeight = "600";
          }
          if (self.hasAttribute('x-sFontFamily')){
            var family = self.getAttribute('x-sFontFamily');
            self.style.fontFamily = family;
          }
          else {
            self.style.fontFamily = "'Poppins',sans-serif";
          }

           self.addEventListener('click' , () => {
            var parent = this.parentElement;
            parent.querySelector('abhix-sc').classList.toggle('abhix-scShow');
            parent.querySelector('abhix-selector').classList.toggle('abhix-scActive');
           });
        }
        
      }
    customElements.define("abhix-selector", CustomSelector);

    class CustomSelectorContent extends HTMLElement {
      constructor(){
        super();
    
        var self = this;

        if (self.hasAttribute('x-sColor')){
          var color= self.getAttribute('x-sColor');
          self.style.color = color;
        }
        else {
          self.style.color = "#333";
        }

        if (self.hasAttribute('x-sbackgroundColor')){
          var bg = self.getAttribute('x-sbackgroundColor');
          self.style.backgroundColor = bg;
        }
        else {
          self.style.backgroundColor = "#fff";
        }
        if (self.hasAttribute('x-sFontSize')){
          var size = self.getAttribute('x-sFontSize');
          self.style.fontSize = size;
        }
        else {
          self.style.sfontSize = "18px";
        }
        if (self.hasAttribute('x-sFontWeight')){
          var weight = self.getAttribute('x-sFontWeight');
          self.style.fontWeight = weight;
        }
        else {
          self.style.fontWeight = "600";
        }
        if (self.hasAttribute('x-sFontFamily')){
          var family = self.getAttribute('x-sFontFamily');
          self.style.fontFamily = family;
        }
        else {
          self.style.fontFamily = "'Poppins',sans-serif";
        }
        

    
      }
    }
    customElements.define("abhix-sc", CustomSelectorContent);

    class CustomSelectorContentOptions extends HTMLElement {
      constructor(){
        super();

        var self = this.parentElement.querySelectorAll('abhix-sco');
        
      self.forEach(sel =>{
        var parent = sel.parentElement;
        
        sel.addEventListener('mouseenter' , () => {
          if (parent.hasAttribute('x-sHover')){
           var hover = parent.getAttribute('x-sHover');
           sel.style.backgroundColor = hover;
          }
          else {
            sel.style.backgroundColor = "rgba(0,0,0,0.1)";
          }
         });
         sel.addEventListener('mouseleave' , () => {
          if (parent.hasAttribute('x-sbackgroundColor')){
           var bg = parent.getAttribute('x-sbackgroundColor');
           sel.style.backgroundColor = bg;
          }
          else {
            sel.style.backgroundColor = "#fff";
          }
         });
      })

        
        const options = this.parentElement.querySelectorAll('abhix-sco');
        let selectedCount = 0;
        options.forEach(option => {
          if (option.hasAttribute('x-selected')) {
            selectedCount++;
          }
        });
        
        if (selectedCount > 1) {
          this.parentElement.parentElement.querySelector('abhix-selector h3').innerHTML = "Select";
        } else {
          options.forEach(option => {
            if (option.hasAttribute('x-selected')) {
              this.parentElement.parentElement.querySelector('abhix-selector h3').innerHTML = option.innerText;
            }
          });
        }

        
      }
    }
    customElements.define("abhix-sco", CustomSelectorContentOptions);
}); 
