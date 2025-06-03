"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//===========[] SCROLL LOGIC
function setupScrollLogic() {
  //console.log('Setting up scroll logic...');
  // Handle original scroll-toggle
  var toggleElements = document.querySelectorAll('[scroll-toggle]'); //console.log('Found toggle elements:', toggleElements.length);

  toggleElements.forEach(function (el) {
    var attr = el.getAttribute('scroll-toggle');
    var parsed;

    try {
      parsed = eval(attr);
    } catch (e) {
      console.error('Invalid scroll-toggle format:', attr);
      return;
    }

    var _parsed = parsed,
        _parsed2 = _slicedToArray(_parsed, 3),
        originalClasses = _parsed2[0],
        trigger = _parsed2[1],
        newClasses = _parsed2[2];

    var toggled = false;

    function handleToggle() {
      var shouldToggle = checkTrigger(el, trigger);

      if (shouldToggle && !toggled) {
        var _el$classList, _el$classList2;

        (_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray(originalClasses));

        (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(newClasses));

        toggled = true;
      } else if (!shouldToggle && toggled) {
        var _el$classList3, _el$classList4;

        (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(newClasses));

        (_el$classList4 = el.classList).add.apply(_el$classList4, _toConsumableArray(originalClasses));

        toggled = false;
      }
    }

    window.addEventListener('scroll', handleToggle);
    window.addEventListener('resize', handleToggle);
    handleToggle();
  }); // Handle scroll-logic-add with simple parsing

  var addElements = document.querySelectorAll('[scroll-logic-add]'); //console.log('Found add elements:', addElements.length);

  addElements.forEach(function (el, index) {
    var attr = el.getAttribute('scroll-logic-add'); //console.log(`Processing add element ${index}:`, attr);
    // Simple parsing: trigger,attr1|attr2|attr3,val1|val2|val3

    var parts = attr.split(',');

    if (parts.length !== 3) {
      console.error('Invalid format, expected 3 parts:', attr);
      return;
    }

    var trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
    var targetAttrs = parts[1].split('|');
    var values = parts[2].split('|'); //console.log('Parsed:', {trigger, targetAttrs, values});

    var added = false;

    function handleAdd() {
      var shouldAdd = checkTrigger(el, trigger);

      if (shouldAdd && !added) {
        //console.log(`Adding to element ${index}`);
        updateDebug("Adding to element ".concat(index));

        for (var i = 0; i < targetAttrs.length; i++) {
          var attrType = targetAttrs[i];
          var value = values[i];

          if (attrType === 'class') {
            el.classList.add(value); //console.log(`Added class: ${value}`);
          } else {
            el.setAttribute(attrType, value); //console.log(`Set attribute ${attrType}: ${value}`);
          }
        }

        added = true;
      } else if (!shouldAdd && added) {
        //console.log(`Removing from element ${index}`);
        updateDebug("Removing from element ".concat(index));

        for (var _i2 = 0; _i2 < targetAttrs.length; _i2++) {
          var _attrType = targetAttrs[_i2];
          var _value = values[_i2];

          if (_attrType === 'class') {
            el.classList.remove(_value); //console.log(`Removed class: ${value}`);
          } else {
            el.setAttribute(_attrType, ''); //console.log(`Cleared attribute: ${attrType}`);
          }
        }

        added = false;
      }
    }

    window.addEventListener('scroll', handleAdd);
    window.addEventListener('resize', handleAdd);
    handleAdd();
  }); // Handle scroll-logic-add-per (PERMANENT) with simple parsing

  var addPerElements = document.querySelectorAll('[scroll-logic-add-per]'); //console.log('Found add-per elements:', addPerElements.length);

  addPerElements.forEach(function (el, index) {
    var attr = el.getAttribute('scroll-logic-add-per'); //console.log(`Processing add-per element ${index}:`, attr);

    var parts = attr.split(',');

    if (parts.length !== 3) {
      console.error('Invalid format, expected 3 parts:', attr);
      return;
    }

    var trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
    var targetAttrs = parts[1].split('|');
    var values = parts[2].split('|'); //console.log('Parsed:', {trigger, targetAttrs, values});

    var executed = false;

    function handleAddPer() {
      var shouldAdd = checkTrigger(el, trigger);

      if (shouldAdd && !executed) {
        //console.log(`PERMANENTLY adding to element ${index}`);
        updateDebug("PERMANENTLY adding to element ".concat(index));

        for (var i = 0; i < targetAttrs.length; i++) {
          var attrType = targetAttrs[i];
          var value = values[i];

          if (attrType === 'class') {
            el.classList.add(value); //console.log(`PERMANENTLY added class: ${value}`);
          } else {
            el.setAttribute(attrType, value); //console.log(`PERMANENTLY set attribute ${attrType}: ${value}`);
          }
        }

        executed = true; // Remove event listeners since it's permanent

        window.removeEventListener('scroll', handleAddPer);
        window.removeEventListener('resize', handleAddPer);
      }
    }

    window.addEventListener('scroll', handleAddPer);
    window.addEventListener('resize', handleAddPer);
    handleAddPer();
  }); // Handle scroll-logic-remove-per (PERMANENT) with simple parsing

  var removePerElements = document.querySelectorAll('[scroll-logic-remove-per]'); //console.log('Found remove-per elements:', removePerElements.length);

  removePerElements.forEach(function (el, index) {
    var attr = el.getAttribute('scroll-logic-remove-per'); //console.log(`Processing remove-per element ${index}:`, attr);

    var parts = attr.split(',');

    if (parts.length !== 3) {
      console.error('Invalid format, expected 3 parts:', attr);
      return;
    }

    var trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
    var targetAttrs = parts[1].split('|');
    var values = parts[2].split('|'); //console.log('Parsed:', {trigger, targetAttrs, values});

    var executed = false;

    function handleRemovePer() {
      var shouldRemove = checkTrigger(el, trigger);

      if (shouldRemove && !executed) {
        //console.log(`PERMANENTLY removing from element ${index}`);
        updateDebug("PERMANENTLY removing from element ".concat(index));

        for (var i = 0; i < targetAttrs.length; i++) {
          var attrType = targetAttrs[i];
          var value = values[i];

          if (attrType === 'class') {
            el.classList.remove(value); //console.log(`PERMANENTLY removed class: ${value}`);
          } else {
            el.removeAttribute(attrType); //console.log(`PERMANENTLY removed attribute: ${attrType}`);
          }
        }

        executed = true; // Remove event listeners since it's permanent

        window.removeEventListener('scroll', handleRemovePer);
        window.removeEventListener('resize', handleRemovePer);
      }
    }

    window.addEventListener('scroll', handleRemovePer);
    window.addEventListener('resize', handleRemovePer);
    handleRemovePer();
  }); // Handle scroll-logic-change-per (PERMANENT) with simple parsing

  var changePerElements = document.querySelectorAll('[scroll-logic-change-per]'); //console.log('Found change-per elements:', changePerElements.length);

  changePerElements.forEach(function (el, index) {
    var attr = el.getAttribute('scroll-logic-change-per'); //console.log(`Processing change-per element ${index}:`, attr);

    var parts = attr.split(',');

    if (parts.length !== 3) {
      console.error('Invalid format, expected 3 parts:', attr);
      return;
    }

    var trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
    var targetAttrs = parts[1].split('|');
    var values = parts[2].split('|'); //console.log('Parsed:', {trigger, targetAttrs, values});

    var executed = false;

    function handleChangePer() {
      var shouldChange = checkTrigger(el, trigger);

      if (shouldChange && !executed) {
        //console.log(`PERMANENTLY changing element ${index}`);
        updateDebug("PERMANENTLY changing element ".concat(index));

        for (var i = 0; i < targetAttrs.length; i++) {
          var attrType = targetAttrs[i];
          var value = values[i];

          if (attrType === 'class') {
            el.className = value; //console.log(`PERMANENTLY changed class to: ${value}`);
          } else {
            el.setAttribute(attrType, value); //console.log(`PERMANENTLY set attribute ${attrType}: ${value}`);
          }
        }

        executed = true; // Remove event listeners since it's permanent

        window.removeEventListener('scroll', handleChangePer);
        window.removeEventListener('resize', handleChangePer);
      }
    }

    window.addEventListener('scroll', handleChangePer);
    window.addEventListener('resize', handleChangePer);
    handleChangePer();
  }); // Handle scroll-logic-remove with simple parsing

  var removeElements = document.querySelectorAll('[scroll-logic-remove]'); //console.log('Found remove elements:', removeElements.length);

  removeElements.forEach(function (el, index) {
    var attr = el.getAttribute('scroll-logic-remove'); //console.log(`Processing remove element ${index}:`, attr);
    // Simple parsing: trigger,attr1|attr2|attr3,val1|val2|val3

    var parts = attr.split(',');

    if (parts.length !== 3) {
      console.error('Invalid format, expected 3 parts:', attr);
      return;
    }

    var trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
    var targetAttrs = parts[1].split('|');
    var values = parts[2].split('|'); //console.log('Parsed:', {trigger, targetAttrs, values});

    var removed = false;

    function handleRemove() {
      var shouldRemove = checkTrigger(el, trigger);

      if (shouldRemove && !removed) {
        //console.log(`Removing from element ${index}`);
        updateDebug("Removing from element ".concat(index));

        for (var i = 0; i < targetAttrs.length; i++) {
          var attrType = targetAttrs[i];
          var value = values[i];

          if (attrType === 'class') {
            el.classList.remove(value); //console.log(`Removed class: ${value}`);
          } else {
            el.removeAttribute(attrType); //console.log(`Removed attribute: ${attrType}`);
          }
        }

        removed = true;
      } else if (!shouldRemove && removed) {
        //console.log(`Adding back to element ${index}`);
        updateDebug("Adding back to element ".concat(index));

        for (var _i3 = 0; _i3 < targetAttrs.length; _i3++) {
          var _attrType2 = targetAttrs[_i3];
          var _value2 = values[_i3];

          if (_attrType2 === 'class') {
            el.classList.add(_value2); //console.log(`Added back class: ${value}`);
          } else {
            el.setAttribute(_attrType2, _value2); //console.log(`Added back attribute ${attrType}: ${value}`);
          }
        }

        removed = false;
      }
    }

    window.addEventListener('scroll', handleRemove);
    window.addEventListener('resize', handleRemove);
    handleRemove();
  }); // Handle scroll-logic-change with simple parsing

  var changeElements = document.querySelectorAll('[scroll-logic-change]'); //console.log('Found change elements:', changeElements.length);

  changeElements.forEach(function (el, index) {
    var attr = el.getAttribute('scroll-logic-change'); //console.log(`Processing change element ${index}:`, attr);
    // Simple parsing: trigger,attr1|attr2|attr3,val1|val2|val3

    var parts = attr.split(',');

    if (parts.length !== 3) {
      console.error('Invalid format, expected 3 parts:', attr);
      return;
    }

    var trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
    var targetAttrs = parts[1].split('|');
    var values = parts[2].split('|'); //console.log('Parsed:', {trigger, targetAttrs, values});

    var changed = false;
    var originalValues = {}; // Store original values

    for (var i = 0; i < targetAttrs.length; i++) {
      var attrType = targetAttrs[i];

      if (attrType === 'class') {
        originalValues[attrType] = el.className;
      } else {
        originalValues[attrType] = el.getAttribute(attrType) || '';
      }
    } // Store in scroll-origin attribute


    el.setAttribute('scroll-origin', JSON.stringify(originalValues)); //console.log(`Stored original values for element ${index}:`, originalValues);

    function handleChange() {
      var shouldChange = checkTrigger(el, trigger);

      if (shouldChange && !changed) {
        //console.log(`Changing element ${index}`);
        updateDebug("Changing element ".concat(index));

        for (var _i4 = 0; _i4 < targetAttrs.length; _i4++) {
          var _attrType3 = targetAttrs[_i4];
          var value = values[_i4];

          if (_attrType3 === 'class') {
            el.className = value; //console.log(`Changed class to: ${value}`);
          } else {
            el.setAttribute(_attrType3, value); //console.log(`Set attribute ${attrType}: ${value}`);
          }
        }

        changed = true;
      } else if (!shouldChange && changed) {
        //console.log(`Restoring element ${index}`);
        updateDebug("Restoring element ".concat(index));
        var originData = JSON.parse(el.getAttribute('scroll-origin'));

        for (var _i5 = 0; _i5 < targetAttrs.length; _i5++) {
          var _attrType4 = targetAttrs[_i5];
          var originalValue = originData[_attrType4];

          if (_attrType4 === 'class') {
            el.className = originalValue; //console.log(`Restored class to: ${originalValue}`);
          } else {
            el.setAttribute(_attrType4, originalValue); //console.log(`Restored attribute ${attrType}: ${originalValue}`);
          }
        }

        changed = false;
      }
    }

    window.addEventListener('scroll', handleChange);
    window.addEventListener('resize', handleChange);
    handleChange();
  });
} // Helper function to check trigger conditions


function checkTrigger(el, trigger) {
  var rect = el.getBoundingClientRect();
  var elHeight = rect.height;
  var winHeight = window.innerHeight;
  var elCenter = rect.top + elHeight / 2;
  var scrollY = window.scrollY || document.documentElement.scrollTop;

  function isVisible(rect) {
    return rect.bottom > 0 && rect.top < window.innerHeight;
  }

  if (typeof trigger === 'number') {
    // Trigger based on scroll position
    return scrollY >= trigger;
  } else if (typeof trigger === 'string') {
    if (trigger === 'top') {
      return isVisible(rect) && rect.top <= 0;
    } else if (trigger === 'center') {
      return isVisible(rect) && elCenter <= winHeight / 2;
    } else if (trigger === 'bottom') {
      return isVisible(rect) && rect.bottom <= winHeight;
    } else if (trigger.endsWith('%')) {
      // Percent-based trigger
      var percent = parseFloat(trigger);

      if (!isNaN(percent)) {
        var threshold = winHeight * (1 - percent / 100);
        return isVisible(rect) && elCenter <= threshold;
      }
    }
  }

  return false;
} // Update scroll position display


function updateScrollInfo() {
  try {
    var scrollInfo = document.getElementById('scrollInfo');
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollInfo.textContent = "Scroll: ".concat(Math.round(scrollY), "px");
  } catch (error) {}
} // Update debug info


function updateDebug(message) {
  try {
    var debugInfo = document.getElementById('debugInfo');
    debugInfo.textContent = "Debug: ".concat(message);
  } catch (error) {}
}

window.addEventListener('scroll', updateScrollInfo);
window.addEventListener('DOMContentLoaded', setupScrollLogic); //===========[] MODEL LOGIC  

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[popup]').forEach(function (modal) {
    var isOpen = modal.getAttribute('openview') === 'true';
    modal.style.display = isOpen ? 'block' : 'none'; // Handle popstyle

    var popstyle = modal.getAttribute('popstyle');

    if (popstyle === 'fixed') {
      modal.style.position = 'fixed';
    } else if (popstyle === 'abs') {
      modal.style.position = 'absolute';
    } // Handle popindex


    var popindex = modal.getAttribute('popindex');
    modal.style.zIndex = popindex ? popindex : '5';
  }); // OPEN popup

  document.querySelectorAll('[popup_opn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetID = btn.getAttribute('popup_opn');
      var animClass = btn.getAttribute('popup_opn_ani');
      var target = document.querySelector("[popup=\"".concat(targetID, "\"]"));

      if (target) {
        target.style.display = 'block';

        if (animClass) {
          target.classList.add(animClass);
          setTimeout(function () {
            target.classList.remove(animClass);
          }, 500);
        }

        target.setAttribute('openview', 'true');
      }
    });
  }); // CLOSE popup

  document.querySelectorAll('[popup_cls]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetID = btn.getAttribute('popup_cls');
      var animClass = btn.getAttribute('popup_cls_ani');
      var target = document.querySelector("[popup=\"".concat(targetID, "\"]"));

      if (target) {
        if (animClass) {
          target.classList.add(animClass);
          setTimeout(function () {
            target.classList.remove(animClass);
            target.style.display = 'none';
          }, 500);
        } else {
          target.style.display = 'none';
        }

        target.setAttribute('openview', 'false');
      }
    });
  });
});

function css_insert(css) {
  var styleTag = document.querySelector('head style[data-dynamic-css]');

  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.setAttribute('data-dynamic-css', 'true');
    document.head.appendChild(styleTag);
  }

  styleTag.appendChild(document.createTextNode(css));
} //entrance animation


css_insert("\n  .scale-in-center{animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-bl{animation:scale-in-bl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-ver-center{animation:scale-in-ver-center .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-top{animation:scale-in-top .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-left{animation:scale-in-left .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-ver-top{animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-tr{animation:scale-in-tr .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-tl{animation:scale-in-tl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-ver-bottom{animation:scale-in-ver-bottom .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-right{animation:scale-in-right .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-hor-center{animation:scale-in-hor-center .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-br{animation:scale-in-br .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-hor-left{animation:scale-in-hor-left .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-bottom{animation:scale-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}\n  .scale-in-hor-right{animation:scale-in-hor-right .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-center{animation:rotate-in-center .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-bl{animation:rotate-in-bl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-diag-2{animation:rotate-in-diag-2 .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-top{animation:rotate-in-top .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-left{animation:rotate-in-left .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-tr{animation:rotate-in-tr .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-tl{animation:rotate-in-tl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-right{animation:rotate-in-right .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-hor{animation:rotate-in-hor .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-br{animation:rotate-in-br .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-ver{animation:rotate-in-ver .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-bottom{animation:rotate-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-diag-1{animation:rotate-in-diag-1 .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-cw{animation:rotate-in-2-cw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-tr-cw{animation:rotate-in-2-tr-cw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-tl-cw{animation:rotate-in-2-tl-cw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-ccw{animation:rotate-in-2-ccw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-tr-ccw{animation:rotate-in-2-tr-ccw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-tl-ccw{animation:rotate-in-2-tl-ccw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-fwd-cw{animation:rotate-in-2-fwd-cw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-br-cw{animation:rotate-in-2-br-cw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-fwd-ccw{animation:rotate-in-2-fwd-ccw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-br-ccw{animation:rotate-in-2-br-ccw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-bck-cw{animation:rotate-in-2-bck-cw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-bl-cw{animation:rotate-in-2-bl-cw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-bck-ccw{animation:rotate-in-2-bck-ccw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .rotate-in-2-bl-ccw{animation:rotate-in-2-bl-ccw .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-top{animation:slide-in-blurred-top .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-left{animation:slide-in-blurred-left .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-tr{animation:slide-in-blurred-tr .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-tl{animation:slide-in-blurred-tl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-right{animation:slide-in-blurred-right .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-bottom{animation:slide-in-blurred-bottom .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-br{animation:slide-in-blurred-br .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-blurred-bl{animation:slide-in-blurred-bl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-elliptic-top-fwd{animation:slide-in-elliptic-top-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-elliptic-left-fwd{animation:slide-in-elliptic-left-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-elliptic-top-bck{animation:slide-in-elliptic-top-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-elliptic-left-bck{animation:slide-in-elliptic-left-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-elliptic-right-fwd{animation:slide-in-elliptic-right-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-elliptic-right-bck{animation:slide-in-elliptic-right-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .slide-in-elliptic-bottom-fwd{animation:slide-in-elliptic-bottom-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-top-fwd{animation:swing-in-top-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-left-fwd{animation:swing-in-left-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-top-bck{animation:swing-in-top-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-left-bck{animation:swing-in-left-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-right-fwd{animation:swing-in-right-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-right-bck{animation:swing-in-right-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-bottom-fwd{animation:swing-in-bottom-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .swing-in-bottom-bck{animation:swing-in-bottom-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in{animation:fade-in .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-br{animation:fade-in-br .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-fwd{animation:fade-in-fwd .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-bottom{animation:fade-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-bck{animation:fade-in-bck .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-bl{animation:fade-in-bl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-top{animation:fade-in-top .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-left{animation:fade-in-left .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-tr{animation:fade-in-tr .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-tl{animation:fade-in-tl .5s cubic-bezier(.25,.46,.45,.94) both}\n  .fade-in-right{animation:fade-in-right .5s cubic-bezier(.25,.46,.45,.94) both}\n  \n  \n  @-webkit-keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\n  @-webkit-keyframes scale-in-bl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-in-bl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}\n  @-webkit-keyframes scale-in-ver-center{0%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}}@keyframes scale-in-ver-center{0%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}}\n  @-webkit-keyframes scale-in-top{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}@keyframes scale-in-top{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}\n  @-webkit-keyframes scale-in-left{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}}@keyframes scale-in-left{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}}\n  @-webkit-keyframes scale-in-ver-top{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-in-ver-top{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}\n  @-webkit-keyframes scale-in-tr{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-in-tr{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}\n  @-webkit-keyframes scale-in-tl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-in-tl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}\n  @-webkit-keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}\n  @-webkit-keyframes scale-in-right{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}@keyframes scale-in-right{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}\n  @-webkit-keyframes scale-in-hor-center{0%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}}@keyframes scale-in-hor-center{0%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}}\n  @-webkit-keyframes scale-in-br{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}\n  @-webkit-keyframes scale-in-hor-left{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-in-hor-left{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}\n  @-webkit-keyframes scale-in-bottom{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}@keyframes scale-in-bottom{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}\n  @-webkit-keyframes scale-in-hor-right{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-in-hor-right{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}\n  @-webkit-keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}\n  @-webkit-keyframes rotate-in-bl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:1}}@keyframes rotate-in-bl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:1}}\n  @-webkit-keyframes rotate-in-diag-2{0%{-webkit-transform:rotate3d(-1,1,0,-360deg);transform:rotate3d(-1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(-1,1,0,0deg);transform:rotate3d(-1,1,0,0deg);opacity:1}}@keyframes rotate-in-diag-2{0%{-webkit-transform:rotate3d(-1,1,0,-360deg);transform:rotate3d(-1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(-1,1,0,0deg);transform:rotate3d(-1,1,0,0deg);opacity:1}}\n  @-webkit-keyframes rotate-in-top{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes rotate-in-top{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}\n  @-webkit-keyframes rotate-in-left{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:left;transform-origin:left;opacity:1}}@keyframes rotate-in-left{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:left;transform-origin:left;opacity:1}}\n  @-webkit-keyframes rotate-in-tr{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:1}}@keyframes rotate-in-tr{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:1}}\n  @-webkit-keyframes rotate-in-tl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:1}}@keyframes rotate-in-tl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:1}}\n  @-webkit-keyframes rotate-in-right{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:right;transform-origin:right;opacity:1}}@keyframes rotate-in-right{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:right;transform-origin:right;opacity:1}}\n  @-webkit-keyframes rotate-in-hor{0%{-webkit-transform:rotateX(360deg);transform:rotateX(360deg);opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes rotate-in-hor{0%{-webkit-transform:rotateX(360deg);transform:rotateX(360deg);opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}\n  @-webkit-keyframes rotate-in-br{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:1}}@keyframes rotate-in-br{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:1}}\n  @-webkit-keyframes rotate-in-ver{0%{-webkit-transform:rotateY(-360deg);transform:rotateY(-360deg);opacity:0}100%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg);opacity:1}}@keyframes rotate-in-ver{0%{-webkit-transform:rotateY(-360deg);transform:rotateY(-360deg);opacity:0}100%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg);opacity:1}}\n  @-webkit-keyframes rotate-in-bottom{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes rotate-in-bottom{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}\n  @-webkit-keyframes rotate-in-diag-1{0%{-webkit-transform:rotate3d(1,1,0,-360deg);transform:rotate3d(1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(1,1,0,0deg);transform:rotate3d(1,1,0,0deg);opacity:1}}@keyframes rotate-in-diag-1{0%{-webkit-transform:rotate3d(1,1,0,-360deg);transform:rotate3d(1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(1,1,0,0deg);transform:rotate3d(1,1,0,0deg);opacity:1}}\n  @-webkit-keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}\n  @-webkit-keyframes rotate-in-2-tr-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes rotate-in-2-tr-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}\n  @-webkit-keyframes rotate-in-2-tl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes rotate-in-2-tl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}\n  @-webkit-keyframes rotate-in-2-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-2-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}\n  @-webkit-keyframes rotate-in-2-tr-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes rotate-in-2-tr-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}\n  @-webkit-keyframes rotate-in-2-tl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes rotate-in-2-tl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}\n  @-webkit-keyframes rotate-in-2-fwd-cw{0%{-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-fwd-cw{0%{-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}\n  @-webkit-keyframes rotate-in-2-br-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes rotate-in-2-br-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}\n  @-webkit-keyframes rotate-in-2-fwd-ccw{0%{-webkit-transform:translateZ(-200px) rotate(45deg);transform:translateZ(-200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-fwd-ccw{0%{-webkit-transform:translateZ(-200px) rotate(45deg);transform:translateZ(-200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}\n  @-webkit-keyframes rotate-in-2-br-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes rotate-in-2-br-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}\n  @-webkit-keyframes rotate-in-2-bck-cw{0%{-webkit-transform:translateZ(200px) rotate(-45deg);transform:translateZ(200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-bck-cw{0%{-webkit-transform:translateZ(200px) rotate(-45deg);transform:translateZ(200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}\n  @-webkit-keyframes rotate-in-2-bl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes rotate-in-2-bl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}\n  @-webkit-keyframes rotate-in-2-bck-ccw{0%{-webkit-transform:translateZ(200px) rotate(45deg);transform:translateZ(200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-bck-ccw{0%{-webkit-transform:translateZ(200px) rotate(45deg);transform:translateZ(200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}\n  @-webkit-keyframes rotate-in-2-bl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes rotate-in-2-bl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}\n  @-webkit-keyframes slide-in-blurred-top{0%{-webkit-transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform:translateY(-1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-top{0%{-webkit-transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform:translateY(-1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-blurred-left{0%{-webkit-transform:translateX(-1000px) scaleX(2.5) scaleY(.2);transform:translateX(-1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-left{0%{-webkit-transform:translateX(-1000px) scaleX(2.5) scaleY(.2);transform:translateX(-1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-blurred-tr{0%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-tr{0%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-blurred-tl{0%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-tl{0%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-blurred-right{0%{-webkit-transform:translateX(1000px) scaleX(2.5) scaleY(.2);transform:translateX(1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-right{0%{-webkit-transform:translateX(1000px) scaleX(2.5) scaleY(.2);transform:translateX(1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-blurred-bottom{0%{-webkit-transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform:translateY(1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-bottom{0%{-webkit-transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform:translateY(1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-blurred-br{0%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-br{0%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-blurred-bl{0%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-bl{0%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}\n  @-webkit-keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}@keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}\n  @-webkit-keyframes slide-in-elliptic-left-fwd{0%{-webkit-transform:translateX(-800px) rotateY(30deg) scale(0);transform:translateX(-800px) rotateY(30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:1800px 50%;transform-origin:1800px 50%;opacity:1}}@keyframes slide-in-elliptic-left-fwd{0%{-webkit-transform:translateX(-800px) rotateY(30deg) scale(0);transform:translateX(-800px) rotateY(30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:1800px 50%;transform-origin:1800px 50%;opacity:1}}\n  @-webkit-keyframes slide-in-elliptic-top-bck{0%{-webkit-transform:translateY(-600px) rotateX(30deg) scale(6.5);transform:translateY(-600px) rotateX(30deg) scale(6.5);-webkit-transform-origin:50% 200%;transform-origin:50% 200%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -500px;transform-origin:50% -500px;opacity:1}}@keyframes slide-in-elliptic-top-bck{0%{-webkit-transform:translateY(-600px) rotateX(30deg) scale(6.5);transform:translateY(-600px) rotateX(30deg) scale(6.5);-webkit-transform-origin:50% 200%;transform-origin:50% 200%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -500px;transform-origin:50% -500px;opacity:1}}\n  @-webkit-keyframes slide-in-elliptic-left-bck{0%{-webkit-transform:translateX(-800px) rotateY(-30deg) scale(6.5);transform:translateX(-800px) rotateY(-30deg) scale(6.5);-webkit-transform-origin:200% 50%;transform-origin:200% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-600px 50%;transform-origin:-600px 50%;opacity:1}}@keyframes slide-in-elliptic-left-bck{0%{-webkit-transform:translateX(-800px) rotateY(-30deg) scale(6.5);transform:translateX(-800px) rotateY(-30deg) scale(6.5);-webkit-transform-origin:200% 50%;transform-origin:200% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-600px 50%;transform-origin:-600px 50%;opacity:1}}\n  @-webkit-keyframes slide-in-elliptic-right-fwd{0%{-webkit-transform:translateX(800px) rotateY(-30deg) scale(0);transform:translateX(800px) rotateY(-30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-1800px 50%;transform-origin:-1800px 50%;opacity:1}}@keyframes slide-in-elliptic-right-fwd{0%{-webkit-transform:translateX(800px) rotateY(-30deg) scale(0);transform:translateX(800px) rotateY(-30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-1800px 50%;transform-origin:-1800px 50%;opacity:1}}\n  @-webkit-keyframes slide-in-elliptic-right-bck{0%{-webkit-transform:translateX(800px) rotateY(30deg) scale(6.5);transform:translateX(800px) rotateY(30deg) scale(6.5);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:600px 50%;transform-origin:600px 50%;opacity:1}}@keyframes slide-in-elliptic-right-bck{0%{-webkit-transform:translateX(800px) rotateY(30deg) scale(6.5);transform:translateX(800px) rotateY(30deg) scale(6.5);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:600px 50%;transform-origin:600px 50%;opacity:1}}\n  @-webkit-keyframes slide-in-elliptic-bottom-fwd{0%{-webkit-transform:translateY(600px) rotateX(30deg) scale(0);transform:translateY(600px) rotateX(30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -1400px;transform-origin:50% -1400px;opacity:1}}@keyframes slide-in-elliptic-bottom-fwd{0%{-webkit-transform:translateY(600px) rotateX(30deg) scale(0);transform:translateY(600px) rotateX(30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -1400px;transform-origin:50% -1400px;opacity:1}}\n  @-webkit-keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}\n  @-webkit-keyframes swing-in-left-fwd{0%{-webkit-transform:rotateY(100deg);transform:rotateY(100deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}@keyframes swing-in-left-fwd{0%{-webkit-transform:rotateY(100deg);transform:rotateY(100deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}\n  @-webkit-keyframes swing-in-top-bck{0%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes swing-in-top-bck{0%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}\n  @-webkit-keyframes swing-in-left-bck{0%{-webkit-transform:rotateY(-70deg);transform:rotateY(-70deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}@keyframes swing-in-left-bck{0%{-webkit-transform:rotateY(-70deg);transform:rotateY(-70deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}\n  @-webkit-keyframes swing-in-right-fwd{0%{-webkit-transform:rotateY(-100deg);transform:rotateY(-100deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}@keyframes swing-in-right-fwd{0%{-webkit-transform:rotateY(-100deg);transform:rotateY(-100deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}\n  @-webkit-keyframes swing-in-right-bck{0%{-webkit-transform:rotateY(70deg);transform:rotateY(70deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}@keyframes swing-in-right-bck{0%{-webkit-transform:rotateY(70deg);transform:rotateY(70deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}\n  @-webkit-keyframes swing-in-bottom-fwd{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes swing-in-bottom-fwd{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}\n  @-webkit-keyframes swing-in-bottom-bck{0%{-webkit-transform:rotateX(-70deg);transform:rotateX(-70deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes swing-in-bottom-bck{0%{-webkit-transform:rotateX(-70deg);transform:rotateX(-70deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}\n  @-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}\n  @-webkit-keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n  @-webkit-keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}\n  @-webkit-keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\n  @-webkit-keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}\n  @-webkit-keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n  @-webkit-keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\n  @-webkit-keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}\n  @-webkit-keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n  @-webkit-keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n  @-webkit-keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}\n  /*[IN]  ====================================*/\n            "); // out animation

css_insert("\n  \n  /*[OUT]  ===================================*/\n  .scale-out-center{animation:scale-out-center .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-vertical{animation:scale-out-vertical .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-bl{animation:scale-out-bl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-top{animation:scale-out-top .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-ver-top{animation:scale-out-ver-top .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-tr{animation:scale-out-tr .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-tl{animation:scale-out-tl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-right{animation:scale-out-right .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-horizontal{animation:scale-out-horizontal .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-br{animation:scale-out-br .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-hor-left{animation:scale-out-hor-left .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-bottom{animation:scale-out-bottom .5s cubic-bezier(.55,.085,.68,.53) both}\n  .scale-out-hor-right{animation:scale-out-hor-right .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-top{animation:slide-out-top .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-left{animation:slide-out-left .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-tr{animation:slide-out-tr .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-tl{animation:slide-out-tl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-right{animation:slide-out-right .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-br{animation:slide-out-br .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bottom{animation:slide-out-bottom .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bl{animation:slide-out-bl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-center{animation:slide-out-bck-center .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-bl{animation:slide-out-bck-bl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-left{animation:slide-out-bck-left .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-top{animation:slide-out-bck-top .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-tr{animation:slide-out-bck-tr .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-tl{animation:slide-out-bck-tl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-right{animation:slide-out-bck-right .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-br{animation:slide-out-bck-br .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-bck-bottom{animation:slide-out-bck-bottom .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-center{animation:slide-out-fwd-center .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-bl{animation:slide-out-fwd-bl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-top{animation:slide-out-fwd-top .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-left{animation:slide-out-fwd-left .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-tr{animation:slide-out-fwd-tr .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-tl{animation:slide-out-fwd-tl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-right{animation:slide-out-fwd-right .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-br{animation:slide-out-fwd-br .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-fwd-bottom{animation:slide-out-fwd-bottom .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-blurred-top{animation:slide-out-blurred-top .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-blurred-left{animation:slide-out-blurred-left .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-blurred-tr{animation:slide-out-blurred-tr .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-blurred-tl{animation:slide-out-blurred-tl .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-blurred-br{animation:slide-out-blurred-br .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-blurred-bottom{animation:slide-out-blurred-bottom .5s cubic-bezier(.55,.085,.68,.53) both}\n  .slide-out-blurred-bl{animation:slide-out-blurred-bl .5s cubic-bezier(.55,.085,.68,.53) both}\n  \n  \n  @-webkit-keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}@keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}\n  @-webkit-keyframes scale-out-vertical{0%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}}@keyframes scale-out-vertical{0%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}}\n  @-webkit-keyframes scale-out-bl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-out-bl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}\n  @-webkit-keyframes scale-out-top{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}@keyframes scale-out-top{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}\n  @-webkit-keyframes scale-out-ver-top{0%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-out-ver-top{0%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}\n  @-webkit-keyframes scale-out-tr{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-out-tr{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}\n  @-webkit-keyframes scale-out-tl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-out-tl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}\n  @-webkit-keyframes scale-out-right{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}@keyframes scale-out-right{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}\n  @-webkit-keyframes scale-out-horizontal{0%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}}@keyframes scale-out-horizontal{0%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}}\n  @-webkit-keyframes scale-out-br{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}\n  @-webkit-keyframes scale-out-hor-left{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-out-hor-left{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}\n  @-webkit-keyframes scale-out-bottom{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}@keyframes scale-out-bottom{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}\n  @-webkit-keyframes scale-out-hor-right{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-out-hor-right{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}\n  @-webkit-keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}@keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}}@keyframes slide-out-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-tr{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(1000px);transform:translateY(-1000px) translateX(1000px);opacity:0}}@keyframes slide-out-tr{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(1000px);transform:translateY(-1000px) translateX(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-tl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(-1000px);transform:translateY(-1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-tl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(-1000px);transform:translateY(-1000px) translateX(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}}@keyframes slide-out-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-br{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(1000px);transform:translateY(1000px) translateX(1000px);opacity:0}}@keyframes slide-out-br{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(1000px);transform:translateY(1000px) translateX(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bottom{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(-1000px);transform:translateY(1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-bl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(-1000px);transform:translateY(1000px) translateX(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-center{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}100%{-webkit-transform:translateZ(-1100px);transform:translateZ(-1100px);opacity:0}}@keyframes slide-out-bck-center{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}100%{-webkit-transform:translateZ(-1100px);transform:translateZ(-1100px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-bck-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(-1000px);transform:translateZ(-1100px) translateX(-1000px);opacity:0}}@keyframes slide-out-bck-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(-1000px);transform:translateZ(-1100px) translateX(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px);transform:translateZ(-1100px) translateY(-1000px);opacity:0}}@keyframes slide-out-bck-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px);transform:translateZ(-1100px) translateY(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);opacity:0}}@keyframes slide-out-bck-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-bck-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(1000px);transform:translateZ(-1100px) translateX(1000px);opacity:0}}@keyframes slide-out-bck-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(1000px);transform:translateZ(-1100px) translateX(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(1000px);transform:translateZ(-1100px) translateY(1000px) translateX(1000px);opacity:0}}@keyframes slide-out-bck-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(1000px);transform:translateZ(-1100px) translateY(1000px) translateX(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-bck-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px);transform:translateZ(-1100px) translateY(1000px);opacity:0}}@keyframes slide-out-bck-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px);transform:translateZ(-1100px) translateY(1000px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-center{0%{-webkit-transform:translateZ(1);transform:translateZ(1);opacity:1}100%{-webkit-transform:translateZ(600px);transform:translateZ(600px);opacity:0}}@keyframes slide-out-fwd-center{0%{-webkit-transform:translateZ(1);transform:translateZ(1);opacity:1}100%{-webkit-transform:translateZ(600px);transform:translateZ(600px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(-400px);transform:translateZ(600px) translateY(300px) translateX(-400px);opacity:0}}@keyframes slide-out-fwd-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(-400px);transform:translateZ(600px) translateY(300px) translateX(-400px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px);transform:translateZ(600px) translateY(-300px);opacity:0}}@keyframes slide-out-fwd-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px);transform:translateZ(600px) translateY(-300px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(-400px);transform:translateZ(600px) translateX(-400px);opacity:0}}@keyframes slide-out-fwd-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(-400px);transform:translateZ(600px) translateX(-400px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(400px);transform:translateZ(600px) translateY(-300px) translateX(400px);opacity:0}}@keyframes slide-out-fwd-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(400px);transform:translateZ(600px) translateY(-300px) translateX(400px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(-400px);transform:translateZ(600px) translateY(-300px) translateX(-400px);opacity:0}}@keyframes slide-out-fwd-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(-400px);transform:translateZ(600px) translateY(-300px) translateX(-400px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(400px);transform:translateZ(600px) translateX(400px);opacity:0}}@keyframes slide-out-fwd-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(400px);transform:translateZ(600px) translateX(400px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(400px);transform:translateZ(600px) translateY(300px) translateX(400px);opacity:0}}@keyframes slide-out-fwd-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(400px);transform:translateZ(600px) translateY(300px) translateX(400px);opacity:0}}\n  @-webkit-keyframes slide-out-fwd-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px);transform:translateZ(600px) translateY(300px);opacity:0}}@keyframes slide-out-fwd-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px);transform:translateZ(600px) translateY(300px);opacity:0}}\n  @-webkit-keyframes slide-out-blurred-top{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(-1000px) scaleY(2) scaleX(.2);transform:translateY(-1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-top{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(-1000px) scaleY(2) scaleX(.2);transform:translateY(-1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}\n  @-webkit-keyframes slide-out-blurred-left{0%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateX(-1000px) scaleX(2) scaleY(.2);transform:translateX(-1000px) scaleX(2) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-left{0%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateX(-1000px) scaleX(2) scaleY(.2);transform:translateX(-1000px) scaleX(2) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}\n  @-webkit-keyframes slide-out-blurred-tr{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-tr{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}\n  @-webkit-keyframes slide-out-blurred-tl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-tl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}\n  @-webkit-keyframes slide-out-blurred-br{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-br{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}\n  @-webkit-keyframes slide-out-blurred-bottom{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(1000px) scaleY(2) scaleX(.2);transform:translateY(1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-bottom{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(1000px) scaleY(2) scaleX(.2);transform:translateY(1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}\n  @-webkit-keyframes slide-out-blurred-bl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-bl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}\n  \n            "); //===========[] SCREEN RESIZE LOGIC

var attrConditions = new Map();

function attr_size_changer(element, selector, targetSize, newAttributeValue) {
  var attrName = getAttributeNameFromSelector(selector);
  if (!attrName) return;

  if (!attrConditions.has(element)) {
    attrConditions.set(element, {});
  }

  var elConditions = attrConditions.get(element);

  if (!(attrName in elConditions)) {
    var backupAttr = "data-orig-".concat(attrName);
    var originalValue = element.getAttribute(backupAttr) || element.getAttribute(attrName); // Store original

    element.setAttribute(backupAttr, originalValue);
    elConditions[attrName] = {
      original: originalValue,
      rules: [],
      update: function update() {} // placeholder

    };
  }

  elConditions[attrName].rules.push({
    maxWidth: targetSize,
    value: newAttributeValue
  }); // Overwrite update function each time so it evaluates fresh

  elConditions[attrName].update = function () {
    var _elConditions$attrNam = elConditions[attrName],
        rules = _elConditions$attrNam.rules,
        original = _elConditions$attrNam.original;
    var rulesSorted = rules.slice().sort(function (a, b) {
      return a.maxWidth - b.maxWidth;
    });
    var applied = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = rulesSorted[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var rule = _step.value;

        if (window.innerWidth <= rule.maxWidth) {
          element.setAttribute(attrName, rule.value);
          applied = true;
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (!applied) {
      element.setAttribute(attrName, original);
    }
  };
}

function getAttributeNameFromSelector(selector) {
  var match = selector.match(/\[([\w-]+)\]/);
  return match ? match[1] : null;
}

function initAttrUpdaterFromHTML() {
  var updaterElements = document.querySelectorAll('[attr_size_changer]');
  updaterElements.forEach(function (el) {
    var instructions = el.getAttribute('attr_size_changer');

    var matches = _toConsumableArray(instructions.matchAll(/\(\s*'([^']+)'\s*,\s*(\d+)\s*,\s*'([^']+)'\s*\)/g));

    matches.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 4),
          selector = _ref2[1],
          size = _ref2[2],
          value = _ref2[3];

      attr_size_changer(el, selector, parseInt(size), value);
    });
  }); // Global update function for all elements

  function updateAllAttributes() {
    attrConditions.forEach(function (attrMap) {
      Object.values(attrMap).forEach(function (_ref3) {
        var update = _ref3.update;
        return update();
      });
    });
  } // Initial run


  updateAllAttributes(); // Add resize listener

  window.addEventListener('resize', updateAllAttributes);
}

initAttrUpdaterFromHTML(); // =========================================
// Initialize all custom click events

function initCustomClickEvents() {
  // Find all buttons with event-class-click attribute
  var buttons = document.querySelectorAll('[event-class-click]');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var eventId = this.getAttribute('event-class-click');
      var isToggle = this.getAttribute('event-toggle') === 'true'; //console.log('Button clicked with event-class-click:', eventId, 'Toggle:', isToggle);
      // Find all elements with matching eventid (original functionality)

      var targetElements = document.querySelectorAll("[eventid=\"".concat(eventId, "\"]")); //console.log('Found target elements:', targetElements.length);

      targetElements.forEach(function (element) {
        var updateClasses = element.getAttribute('ev-do-update');

        if (updateClasses) {
          // Store original class data if not already stored
          if (!element.hasAttribute('origin-data')) {
            element.setAttribute('origin-data', element.className); //console.log('Stored origin-data:', element.className);
          }

          if (isToggle) {
            // Toggle between updated and original classes
            var currentClasses = element.className;
            var originalClasses = element.getAttribute('origin-data');

            if (currentClasses === updateClasses) {
              // Currently showing updated classes, revert to original
              element.className = originalClasses; //console.log('Toggled back to original:', originalClasses);
            } else {
              // Currently showing original classes, apply update
              element.className = updateClasses; //console.log('Toggled to updated:', updateClasses);
            }
          } else {
            // No toggle, just update the class attribute
            element.className = updateClasses; //console.log('Updated class to:', updateClasses);
          }
        }
      }); // NEW: Find all elements with event-id-list attribute

      var eventIdListElements = document.querySelectorAll('[event-id-list]'); //console.log('Found event-id-list elements:', eventIdListElements.length);

      eventIdListElements.forEach(function (element) {
        var eventIdListAttr = element.getAttribute('event-id-list');

        if (eventIdListAttr) {
          try {
            // Parse the JSON-like string - handle both single and double quotes
            var jsonString = eventIdListAttr; // Replace single quotes with double quotes for valid JSON

            jsonString = jsonString.replace(/'/g, '"'); //console.log('Original event-id-list string:', eventIdListAttr);
            //console.log('Converted JSON string:', jsonString);

            var eventIdList = JSON.parse(jsonString); //console.log('Parsed event-id-list:', eventIdList);
            // Check if the current eventId exists in the list

            if (eventIdList.hasOwnProperty(eventId)) {
              var targetClasses = eventIdList[eventId]; //console.log('Found matching eventId:', eventId, 'with classes:', targetClasses);
              // Store original class data if not already stored (use a unique key for event-id-list)

              var originKey = 'origin-data-' + eventId;

              if (!element.hasAttribute(originKey)) {
                element.setAttribute(originKey, element.className); //console.log('Stored origin data for', eventId, ':', element.className);
              }

              if (isToggle) {
                // Toggle between target classes and original classes
                var currentClasses = element.className;
                var originalClasses = element.getAttribute(originKey);

                if (currentClasses === targetClasses) {
                  // Currently showing target classes, revert to original
                  element.className = originalClasses; //console.log('Toggled back to original:', originalClasses);
                } else {
                  // Currently showing original or other classes, apply target
                  element.className = targetClasses; //console.log('Toggled to target:', targetClasses);
                }
              } else {
                // No toggle, just update the class attribute
                element.className = targetClasses; //console.log('Updated class to:', targetClasses);
              }
            } else {//console.log('EventId', eventId, 'not found in event-id-list');
              }
          } catch (error) {
            console.error('Error parsing event-id-list JSON:', error);
            console.error('Original string:', eventIdListAttr); // Try alternative parsing method

            try {
              // Remove curly braces and split by comma
              var cleanStr = eventIdListAttr.replace(/[{}]/g, '');
              var pairs = cleanStr.split(',');
              var _eventIdList = {};
              pairs.forEach(function (pair) {
                var _pair$split = pair.split(':'),
                    _pair$split2 = _slicedToArray(_pair$split, 2),
                    key = _pair$split2[0],
                    value = _pair$split2[1];

                if (key && value) {
                  var cleanKey = key.trim().replace(/['"]/g, '');
                  var cleanValue = value.trim().replace(/['"]/g, '');
                  _eventIdList[cleanKey] = cleanValue;
                }
              }); //console.log('Alternative parsing successful:', eventIdList);

              if (_eventIdList.hasOwnProperty(eventId)) {
                var _targetClasses = _eventIdList[eventId];

                var _originKey = 'origin-data-' + eventId;

                if (!element.hasAttribute(_originKey)) {
                  element.setAttribute(_originKey, element.className);
                }

                if (isToggle) {
                  var _currentClasses = element.className;

                  var _originalClasses = element.getAttribute(_originKey);

                  if (_currentClasses === _targetClasses) {
                    element.className = _originalClasses;
                  } else {
                    element.className = _targetClasses;
                  }
                } else {
                  element.className = _targetClasses;
                }
              }
            } catch (altError) {
              console.error('Alternative parsing also failed:', altError);
            }
          }
        }
      });
    });
  });
} // Debug function to show current state


function showDebugInfo() {
  var elements = document.querySelectorAll('[eventid], [event-id-list]');
  var debugInfo = 'Current state of all eventid and event-id-list elements:\n\n';
  elements.forEach(function (el, index) {
    debugInfo += "Element ".concat(index + 1, ":\n");
    debugInfo += "  eventid: ".concat(el.getAttribute('eventid') || 'not set', "\n");
    debugInfo += "  event-id-list: ".concat(el.getAttribute('event-id-list') || 'not set', "\n");
    debugInfo += "  current class: \"".concat(el.className, "\"\n");
    debugInfo += "  ev-do-update: \"".concat(el.getAttribute('ev-do-update') || 'not set', "\"\n");
    debugInfo += "  origin-data: \"".concat(el.getAttribute('origin-data') || 'not set', "\"\n\n");
  });
  document.getElementById('debug-output').textContent = debugInfo;
} // ✅ Safe init for defer-loaded script


document.addEventListener('DOMContentLoaded', function () {
  initCustomClickEvents();
  showDebugInfo(); // optional, pwede nimo tangtangon kung di needed
});