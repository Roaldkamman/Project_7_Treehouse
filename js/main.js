// animations and transitions

$('.bell').click(function() {
    $('.dropdown-notifications').toggle('fade');
});

$('.dropdown-button').click(function() {
    $('.dropdown-notifications').hide('fade');
});

$('.close').click(function() {
    $('.alert-grid').hide('fade');
});

$('.profile-picture').click(function() {
    TweenLite.staggerTo($('.profile-picture'), 1, {
        rotate: 360
    })
})

// local storage

const $check1 = $('#check1');
const $check2 = $('#check2');
const $timezone = $('#timezone');
const $save = $('#save');
const $cancel = $('#cancel');

$save.click(function() {
  const checkedOne = $check1.checked;
  const checkedTwo = $check2.checked;
  const tz = $timezone.value; 
  localStorage.setItem("$check1", checkedOne);
  localStorage.setItem("$check2", checkedTwo);
  localStorage.setItem("$timezone", tz);
});

$cancel.click(function() {
  localStorage.clear();
  let checkedOne = $check1.checked;
  let checkedTwo = $check2.checked;
  if (checkedOne) {
    $check1.checked = false;
  }
  if (checkedTwo) {
    $check2.checked = false;
  }
  $timezone.value = "";
});

function localSettings() {
  let checkedOne = localStorage.getItem("$check1") === "true";
  let checkedTwo = localStorage.getItem("$check2") === "true";
  let tz = localStorage.getItem("$timezone");
  if (checkedOne) {
    $check1.setAttribute("checked", true);
  }
  if (checkedTwo) {
    $check2.setAttribute("checked", true);
  }
  $timezone.value = tz;
}

window.onload = localSettings();