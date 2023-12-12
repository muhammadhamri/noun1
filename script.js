// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// // Array to keep track of dropped elements
// const droppedElements = Array.from(draggableElements).fill(false);

// draggableElements.forEach((elem, index) => {
//   elem.addEventListener("dragstart", (event) => dragStart(event, index));
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event, index) {
//   event.dataTransfer.setData("text", index.toString());
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableIndex = event.dataTransfer.getData("text");
//   const draggableElement = draggableElements[draggableIndex];

//   if (!droppedElements[draggableIndex] && draggableElement) {
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");

//     // Check if the dropped element's ID matches the droppable element's ID
//     if (draggableElement.id === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }

//     // Mark the draggable element as dropped
//     droppedElements[draggableIndex] = true;

//     // Update UI
//     const computedStyle = window.getComputedStyle(draggableElement);
//     event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.insertAdjacentHTML("afterbegin", `<i class="draggable-${draggableElement.id}"></i>`);

//     // Check if all draggable elements are dropped
//     if (droppedElements.every((dropped) => dropped)) {
//       // Check the user's score and display the appropriate message
//       const end = document.querySelector(".end");
//       const end1 = document.querySelector(".end1");

//       if (userScore < 1000) {
//         setTimeout(function () {
//           end1.style.display = "block";
//         }, 1000);
//       } else if (userScore >= 1000) {
//         setTimeout(function () {
//           end.style.display = "block";
//         }, 1000);

//         // setTimeout(function () {
//         //   window.location.href = "../present-continious/index.html";
//         // }, 3000);
//       }
//     }
//   }
// }

// let userScore = 0; // Initial score

// function addPoints(points) {
//   // Update the user's score
//   userScore += points;

//   // Update the score display
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
// }

//////  ....................................///////////////

// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// // Array to keep track of dropped elements
// const droppedElements = Array.from(draggableElements).fill(false);

// draggableElements.forEach((elem, index) => {
//   elem.addEventListener("dragstart", (event) => dragStart(event, index));
//   elem.addEventListener("dragend", () => dragEnd(index));
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event, index) {
//   event.dataTransfer.setData("text", index.toString());
// }

// function dragEnd(index) {
//   if (!droppedElements[index]) {
//     // Handle the case when the element is not dropped onto a droppable area
//     // You can add any necessary cleanup or UI changes here
//   }
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableIndex = event.dataTransfer.getData("text");
//   const draggableElement = draggableElements[draggableIndex];

//   if (!droppedElements[draggableIndex] && draggableElement) {
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");

//     // Check if the dropped element's ID matches the droppable element's ID
//     if (draggableElement.id === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }

//     // Mark the draggable element as dropped
//     droppedElements[draggableIndex] = true;

//     // Update UI
//     event.target.style.backgroundImage = `url(${draggableElement.src}`;
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//   }

//   // Check if all draggable elements are dropped
//   if (droppedElements.every((dropped) => dropped)) {
//     // Check the user's score and display the appropriate message
//     const end = document.querySelector(".end");
//     const end1 = document.querySelector(".end1");
//     const score = document.querySelector(".score");

//     if (userScore < 1000) {
//       setTimeout(function () {
//         end1.style.display = "block";
//         score.style.display = "none";
//       }, 1000);
//     } else if (userScore >= 1000) {
//       setTimeout(function () {
//         end.style.display = "block";
//         score.style.display = "none";
//       }, 1000);

//       // setTimeout(function () {
//       //   window.location.href = "../present-continious/index.html";
//       // }, 3000);
//     }
//   }
// }

// let userScore = 0; // Initial score

// function addPoints(points) {
//   // Update the user's score
//   userScore += points;

//   // Update the score display
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
// }

//////////////////////////////////////////////////////

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

// Array to keep track of dropped elements
const droppedElements = Array.from(draggableElements).fill(false);

draggableElements.forEach((elem, index) => {
  elem.addEventListener("dragstart", (event) => dragStart(event, index));
  elem.addEventListener("dragend", () => dragEnd(index));

  // Touch events
  elem.addEventListener("touchstart", (event) => touchStart(event, index));
  elem.addEventListener("touchend", () => touchEnd(index));
});

droppableElements.forEach((elem) => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);

  // Touch events
  elem.addEventListener("touchenter", dragEnter);
  elem.addEventListener("touchmove", (event) => {
    event.preventDefault(); // Prevent scrolling on touch devices
    dragOver(event);
  });
  elem.addEventListener("touchleave", dragLeave);
  elem.addEventListener("touchend", drop);
});

function dragStart(event, index) {
  event.dataTransfer.setData("text", index.toString());
}

function dragEnd(index) {
  if (!droppedElements[index]) {
    // Handle the case when the element is not dropped onto a droppable area
    // You can add any necessary cleanup or UI changes here
  }
}

function touchStart(event, index) {
  event.preventDefault(); // Prevent default touch behavior
  dragStart(event.touches[0], index);
}

function touchEnd(index) {
  touchLeave(index);
}

function touchLeave(index) {
  if (!droppedElements[index]) {
    // Handle the case when the element is not dropped onto a droppable area
    // You can add any necessary cleanup or UI changes here
  }
}

function dragEnter(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable_hover");
  }
}

function dragOver(event) {
  if (!event.target.classList.contains("dropped")) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable_hover");
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable_hover");

  const draggableIndex = event.dataTransfer.getData("text");
  const draggableElement = draggableElements[draggableIndex];

  if (!droppedElements[draggableIndex] && draggableElement) {
    const droppableElementsData = event.target.getAttribute("data-draggable-id");

    // Check if the dropped element's ID matches the droppable element's ID
    if (draggableElement.id === droppableElementsData) {
      addPoints(100);
    } else {
      addPoints(-50);
    }

    // Mark the draggable element as dropped
    droppedElements[draggableIndex] = true;

    // Update UI
    event.target.style.backgroundImage = `url(${draggableElement.src}`;
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
  }

  // Check if all draggable elements are dropped
  if (droppedElements.every((dropped) => dropped)) {
    // Check the user's score and display the appropriate message
    const end = document.querySelector(".end");
    const end1 = document.querySelector(".end1");
    const score = document.querySelector(".score");

    if (userScore < 1000) {
      setTimeout(function () {
        end1.style.display = "block";
        score.style.display = "none";
      }, 1000);
    } else if (userScore >= 1000) {
      setTimeout(function () {
        end.style.display = "block";
        score.style.display = "none";
      }, 1000);

      // setTimeout(function () {
      //   window.location.href = "../present-continious/index.html";
      // }, 3000);
    }
  }
}

let userScore = 0; // Initial score

function addPoints(points) {
  // Update the user's score
  userScore += points;

  // Update the score display
  const scoreElement = document.getElementById("user-score");
  scoreElement.textContent = `Skor: ${userScore}`;
}
