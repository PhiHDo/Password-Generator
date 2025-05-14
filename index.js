//12 char long password
function createPassword(passwordLength)
{
    let generatedPassword = "";

    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[];?><./-=";

    for (let i = 0; i < passwordLength; i++)
    {
        generatedPassword += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

    }
    // console.log(generatedPassword);
    document.querySelector(".showPassword").textContent = generatedPassword;
}

const copyToClipboard = async () => {
    let copiedText = document.querySelector(".showPassword").textContent;
    try {
        await navigator.clipboard.writeText(copiedText);
        console.log(`copied text: ${copiedText}`);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}



