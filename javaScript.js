// -------------sidebar control

const headerIcon = document.getElementById('headerIcon');
const leftSide = document.getElementById('leftSide');

let isLeftSideHovered = false;

// Mouse hover event for header icon
headerIcon.addEventListener('mouseenter', () => {
    leftSide.classList.add('left-side-show');
});

headerIcon.addEventListener('mouseleave', () => {
    if (!isLeftSideHovered) {
        leftSide.classList.remove('left-side-show');
    }
});

// Mouse hover event for left side
leftSide.addEventListener('mouseenter', () => {
    isLeftSideHovered = true;
    leftSide.classList.add('left-side-show');
});

leftSide.addEventListener('mouseleave', () => {
    isLeftSideHovered = false;
    leftSide.classList.remove('left-side-show');
});

const splitIcon = () => {
    leftSide.classList.add('left-side-show');
}

// -----------------notification

const notificationBox = document.getElementById("noti-dropdown");

const notificationClick =()=> {
    if (notificationBox.classList.contains("notification-show")) {
        notificationBox.classList.remove("notification-show");
    } else {
        notificationBox.classList.add("notification-show");
    }
}

document.body.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!targetElement.closest('.notification')) {
        notificationBox.classList.remove("notification-show");
    }
});

//---------------more actions

const moreactions = document.getElementById("project-id-setting");

const moreActions = () => {
    console.log("kjjkjk");
    if (moreactions.classList.contains("project-id-setting-show")) {
        moreactions.classList.remove("project-id-setting-show");
    } else {
        moreactions.classList.add("project-id-setting-show");
    }
}

document.body.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!targetElement.closest('.more-actions-select')) {
        moreactions.classList.remove("project-id-setting-show");
    }
});


//---------------- branch list

const branchListClass = document.getElementById("branch-list");

const branchList = () => {
    if (branchListClass.classList.contains("branch-list-show")) {
        branchListClass.classList.remove("branch-list-show");
    } else {
        branchListClass.classList.add("branch-list-show");
    }
}

document.body.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!targetElement.closest('.branch-box')) {
        branchListClass.classList.remove("branch-list-show");
    }
});


// ----------------------directory

const fileDirectory = document.getElementById("directory");
const directory = () => {
    console.log("Fsdfa")
    if (fileDirectory.classList.contains("directory-show")) {
        fileDirectory.classList.remove("directory-show");
    } else {
        fileDirectory.classList.add("directory-show");
    }
}

document.body.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!targetElement.closest('.file-directory')) {
        fileDirectory.classList.remove("directory-show");
    }
});


//---------------------edit btn

const editBox = document.getElementById("edit-box")

const editBtn =()=> {
    if (editBox.classList.contains("edit-box-show")) {
        editBox.classList.remove("edit-box-show");
    } else {
        editBox.classList.add("edit-box-show");
    }
}

document.body.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!targetElement.closest('.edit')) {
        editBox.classList.remove("edit-box-show");
    }
});



//---------------------------download

const downloadType = document.getElementById("download-type")


const download = ()=> {
    if (downloadType.classList.contains("download-type-show")) {
        downloadType.classList.remove("download-type-show");
    } else {
        downloadType.classList.add("download-type-show");
    }
}

document.body.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!targetElement.closest('.download-box')) {
        downloadType.classList.remove("download-type-show");
    }
});


//----------------clone url ----------------

const cloneurl = document.getElementById("clone-url")

const cloneUrl = () => {
    if (cloneurl.classList.contains("clone-url-show")) {
        cloneurl.classList.remove("clone-url-show");
    } else {
        cloneurl.classList.add("clone-url-show");
    }
}

document.body.addEventListener('click', function(event) {
    const targetElement = event.target;

    if (!targetElement.closest('.clone')) {
        cloneurl.classList.remove("clone-url-show");
    }
});


//---------------------------code------

const cloneWith = document.getElementById("clone-with")

const code = () => {
    console.log("555")
    if (cloneWith.classList.contains("clone-with-show")) {
        cloneWith.classList.remove("clone-with-show");
    } else {
        cloneWith.classList.add("clone-with-show");
    }
}