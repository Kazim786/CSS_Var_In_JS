// const spacing = document.querySelector("input[type= 'range']");

// const blur = document.getElementById('#blur');

const inputs = document.querySelectorAll('input')


function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate)) //for each inputs run the addEventListener function which is attached to the inputs element

inputs.forEach(inputs => inputs.addEventListener('mousemove', handleUpdate))
