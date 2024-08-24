document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('text');
    const buttons = document.querySelector('.buttons');
    const responseDiv = document.querySelector('.response');
    const responseText = document.getElementById('responseText');
    const gift = document.getElementById('pinkButton');
    const letter = document.getElementById('letter');
    const noResponseText = document.getElementById('noResponseText');
    const letterButtons = document.querySelector('.letter-buttons');
    const thankYouMessage = document.createElement('div');
    const chatButton = document.createElement('button');

    // Hide elements on load
    gift.style.visibility = 'hidden';
    letter.style.visibility = 'hidden';
    letterButtons.style.display = 'none'; // Hide initially
    noResponseText.style.display = 'none';
    thankYouMessage.style.display = 'none';
    chatButton.style.display = 'none';
    buttons.style.display = 'none'; // Hide initial buttons

    // Setup thank you message
    thankYouMessage.innerText = "Thank you :D";
    thankYouMessage.style.fontSize = '30px';
    thankYouMessage.style.fontWeight = 'bold';
    thankYouMessage.style.color = '#fff';
    thankYouMessage.style.textAlign = 'center';
    thankYouMessage.style.marginTop = '20px';
    thankYouMessage.id = 'thankYouMessage'; // Assign ID for CSS styling
    document.body.appendChild(thankYouMessage);

    // Setup chat button
    chatButton.innerText = "Chat Me";
    chatButton.style.fontSize = '20px';
    chatButton.style.fontWeight = 'bold';
    chatButton.style.color = '#fff';
    chatButton.style.backgroundColor = '#25D366'; // WhatsApp green color
    chatButton.style.border = 'none';
    chatButton.style.padding = '10px 20px';
    chatButton.style.borderRadius = '5px';
    chatButton.style.cursor = 'pointer';
    chatButton.style.marginTop = '20px';
    chatButton.id = 'chatButton'; // Assign ID for CSS styling
    chatButton.onclick = function() {
        window.location.href = "https://wa.me/62085810526932";
    };
    document.body.appendChild(chatButton);

    setTimeout(function() {
        text.style.visibility = 'visible';
        buttons.style.display = 'flex'; // Show initial buttons
    }, 3000);

    setTimeout(function() {
        text.style.width = 'auto';
    }, 3000);

    document.getElementById('goodBtn').addEventListener('click', function() {
        responseText.innerHTML = "Thats greatt <br> I have something that I need to tell you.:D";
        responseDiv.style.display = 'block';
        hideInitialContent();

        setTimeout(function() {
            responseText.style.display = 'none';
            gift.style.visibility = 'visible'; // Show the gift button after hiding the response text
        }, 3000); // Adjust the time (in milliseconds) as needed
    });

    document.getElementById('notGoodBtn').addEventListener('click', function() {
        responseText.innerHTML = "Sorry to hear that. <br> I have something that I need to tell you.:D";
        responseDiv.style.display = 'block';
        hideInitialContent();

        setTimeout(function() {
            responseText.style.display = 'none';
            gift.style.visibility = 'visible'; // Show the gift button after hiding the response text
        }, 3000); // Adjust the time (in milliseconds) as needed
    });

    function hideInitialContent() {
        text.style.display = 'none';
        buttons.style.display = 'none'; // Hide the initial buttons
    }

    // Event listener for the gift button
    gift.addEventListener('click', function() {
        gift.style.visibility = 'hidden';
        letter.innerHTML = ''; // Clear the letter content for the typing animation
        letter.style.visibility = 'visible';
        typeWriter(letterText, 0);
    });

    // Typing animation for the letter content
    const letterText = `
        Haii Esther,

        I've been wanting to talk to you about this. So kita kan udah temenan dari Januari, yaa ga terlalu lama sii wkwkwk. 
        Waktu itu pas PMR aku pertama kali ngeliat kamu pas foto pengurus truss besoknya kamu yang mimpin renungan pagi, 
        aku jadi penasaran jadi aku coba nge-DM kamu. Since then, I've realized I have feelings for you.

        So I just want to tell you that I have a crush on you. I find you really cute from the way you smile, talk, and everything. 
        I hope we can be more than friends. It's okay too if you don't feel the same way.

        So will you be my girlfriend?:D
    `;

    function typeWriter(text, i) {
        if (i < text.length) {
            letter.innerHTML += text.charAt(i);
            setTimeout(function() {
                typeWriter(text, i + 1);
            }, 50); // Adjust typing speed by changing the delay (in milliseconds)
        } else {
            letterButtons.style.display = 'flex'; // Ensure display is set to flex
            letterButtons.style.visibility = 'visible'; // Show the letter buttons after typing animation completes
        }
    }

    // Event listener for the "No" button
    document.getElementById('noBtn').addEventListener('click', function() {
        noResponseText.style.display = 'block';
    });

    // Event listener for the "Yes" button
    document.getElementById('yesBtn').addEventListener('click', function() {
        noResponseText.style.display = 'none';

        // Hide the letter
        letter.style.display = 'none';

        // Hide the letter buttons
        letterButtons.style.display = 'none';

        // Show the thank you message
        thankYouMessage.style.display = 'block';

        // Show the chat button
        chatButton.style.display = 'inline-block';
    });
});
