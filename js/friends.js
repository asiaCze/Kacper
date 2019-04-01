import * as $ from './jQuery.js';

jQuery(function() {
  // znajdź wszystkie elementy z klasą cube
  var cubes       = jQuery('.cube');
  // nazwa właściwości CSS, której wartości będziemy zmieniać
  var propertyName= 'transform';
  // prefiksy dla różnych wersji przeglądarek
  var prefix      = ['-webkit-', '-moz-', '-o-', '-ms-', ''];
 
  // uruchamiamy pętlę czasową, która trwa 1,4 sek.
  setInterval(function() {
 
    //dla każdego elementu/kostki
    cubes.each(function() {
      // oblicz wartości przesunięcia względem osi, kolejno: OX, OY, OZ oraz margines górny
      var rotateX   = parseInt(Math.floor(Math.random() * (720 - 1 + 1)) + 1, 10) + 'deg';
      var rotateY   = parseInt(Math.floor(Math.random() * (720 - 1 + 1)) + 1, 10) + 'deg';
      var rotateZ   = parseInt(Math.floor(Math.random() * (720 - 1 + 1)) + 1, 10) + 'deg';
      //var marginTop = parseInt(Math.floor(Math.random() * (100 - 1 + 1)) + 1, 10) + 'px';
 
      // obiekt, ktory będzie zawierał nowe właściwości
      var properties = {};
 
      // utwórz właściwość CSS sprefiksowaną, dzięki temu większa liczba przeglądarek będzie w stanie obsłużyć animację
      jQuery.each(prefix, function(i, k) {
        properties[k + propertyName] = 'rotateY(' + rotateY + ') rotateX(' + rotateX + ') rotateZ(' + rotateZ + ')';
      });
 
      // przypisz nowo utworzonoe właściwości do obiektu
      jQuery(this).css(properties);
 
    });
  }, 1400);

});
 
// JSON data
import famousDownSyndrome from "./data.js";

const list = document.querySelector('.friends');

const createFriend = (person) => {
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('person', person.id);
    
    const friendName = document.createElement('p');
    friendName.textContent = person.name;
    friendName.classList.add('name');
    
    const friendDescription = document.createElement('p');
    friendDescription.textContent = person.description;
    friendDescription.classList.add('description');

    friendDiv.appendChild(friendName);
    friendDiv.appendChild(friendDescription);

    return friendDiv;
  }

const loadData = () => {
  const famousList = famousDownSyndrome.map(person => {
    return createFriend(person);
  })
  famousList.forEach(i => {
    list.appendChild(i);
  })
}

loadData();
