// toggle disabled icons
function toggleDisabledIcon() {
    var allFields = document.querySelectorAll('.field');
    allFields.forEach(function (field) {
        if (field.classList.contains('disable')) {
            field.firstElementChild.src = `./img/magnall_ikonice/${field.id}_disabled.png`;
        } else {
            field.firstElementChild.src = `./img/magnall_ikonice/${field.id}.png`;
        }
    })
}

<div class="container progress_container">
    <div class="progress1">
        <div class="progressWrapper text-center">
            <div id="progressDiv_1" class="glowBorder">
                <div id="progress_1"></div>
            </div>
            <div id="progressDiv_2">
                <div id="progress_2"></div>
            </div>
            <div id="progressDiv_3">
                <div id="progress_3"></div>
            </div>
            <div id="progressDiv_4">
                <div id="progress_4"></div>
            </div>
            <div id="progressDiv_5">
                <div id="progress_5"></div>
            </div>
            <div id="progressDiv_6">
                <div id="progress_6"></div>
            </div>
        </div>
    </div>
</div>