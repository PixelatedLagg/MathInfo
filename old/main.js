async function GetResources()
{
    const result = "";
    const response = await fetch("https://mathinfo.org/sections/Resources.json");
    const json = JSON.parse(await response.json());
    for (const resource of json.Resources)
    {
        if (resource == json.Resources[0]) //first resource
        {
            result += `<a href="section.html" style="border-top-right-radius: 5px;" onclick="SetCurrent(${resource});">${resource}</a>`;
        }
        else if (resource == json.Resources.slice(-1)[0]) //last resource
        {
            result += `<a href="section.html" style="border-bottom-right-radius: 5px;" onclick="SetCurrent(${resource});">${resource}</a>`;
        }
        else
        {
            result += `<a href="section.html" onclick="SetCurrent(${resource});">${resource}</a>`;
        }
    }
}

function LoadSection() //loads sections/{section}
{

}

function LoadPage() //loads data/{section}
{

}

function SetCurrent(section)
{
    localStorage.setItem("section", section);
}