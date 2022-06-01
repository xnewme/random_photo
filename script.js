function surprise(element) {
  document.getElementsByTagName('button')[1].hidden = false;
  let isPhotoHidden;
  if (element.id == 'show') {
    //jeigu
    isPhotoHidden = false;
    document.getElementsByTagName('button')[0].hidden = true;
    document.getElementsByTagName('button')[2].hidden = false;
  }

  if (element.id == 'hide') {
    document.getElementsByTagName('button')[1].hidden = true;
    document.getElementsByTagName('button')[0].hidden = false;
    document.getElementsByTagName('button')[2].hidden = true;
    isPhotoHidden = true;
  }
  let images = document.getElementsByTagName('img');
  let photoArray = [];
  for (i = 0; i < images.length; i++) {
    images[i].hidden = isPhotoHidden;
    photoArray.push([images[i].src]);
  }
  if (element.id == 'suffle') {
    var copy = [].concat(photoArray);
    copy.sort(function () {
      return 0.5 - Math.random();
    });
    for (i = 0; i < images.length; i++) {
      images[i].setAttribute('src', `${copy[i]}`);
    }
  }
}
