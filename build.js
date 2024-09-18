/* this is the conditoon of the memories in the build page where you 
only select one storage size
 */
function storage1() {
  let allanguages = document.querySelectorAll(".storage");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 2) {
    window.alert("please you can only select one storage");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only 
select core i somethingy
 */
function cpu1() {
  let allanguages = document.querySelectorAll(".cpu");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take 1 cpu");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only
 select one operating systems
 */
function ops1() {
  let allanguages = document.querySelectorAll(".ops");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take 1 operating systems");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only 
select one case(cpu case)
 */
function case1() {
  let allanguages = document.querySelectorAll(".case");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take 1 case");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only 
select one mother board
 */
function mother1() {
  let allanguages = document.querySelectorAll(".mother");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take 1 motherboard");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only
 select onegraphic card
 */
function gc1() {
  let allanguages = document.querySelectorAll(".gc");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take 1 graphic card");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only 
select one cpu cooler
 */
function cooler1() {
  let allanguages = document.querySelectorAll(".cooler");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take 1 cpu cooler");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only 
select one power supply
 */
function power1() {
  let allanguages = document.querySelectorAll(".power");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take power supply ");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
/* this is the conditoon of the memories in the build page where you only
 select one memory
 */
function memory1() {
  let allanguages = document.querySelectorAll(".memory");
  let selected = 0;

  for (let count = 0; count < allanguages.length; count++) {
    if (allanguages[count].checked == true) {
      selected += 1;
    }
  }
  if (selected > 1) {
    window.alert("your computer can only take memory ");
    return false;
  } else {
    document.querySelector("#invalid").innerText = "";
  }
}
