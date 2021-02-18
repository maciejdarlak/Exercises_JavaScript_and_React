function Hello()
{
    alert("Hello!")
}

function Hello2(name)
{
    alert(`Hello ${name} !`)
}

Hello();
Hello2();

task3Element.addEventListener("click", Hello)

function stringAmount(a, b, c)
{
    return `${a} ${b} ${c}` 
}

const result = stringAmount("Hi", "there", "!");
alert(result);