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
        responseText.innerHTML = "I'm happy to hear that <br> I have something that I need to tell you.:D";
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
        Hey Esther,

        As you know, we’ve been friends for a while now, and I really value our friendship. 
        I wanted to be honest with you and let you know that I’ve developed feelings for you since the first time we met. 
        I completely understand if this comes as a surprise or if you don’t feel the same way.

        I don’t want to make you feel uncomfortable or put you in a difficult position. 
        I just felt it was important to share my feelings with you and see if we might explore the possibility of being more than friends. 
        If you need time to think about it, that’s absolutely okay. 
        I’m open to having a conversation about it if you’re interested. 
        But if you don’t feel the same way, that’s fine too. 
        I hope we can continue our friendship as it is and that nothing changes between us.

        Thank you for reading this and will you be my girlfriend?:D
    `;

    function typeWriter(text, i) {
        if (i < text.length) {
            letter.innerHTML += text.charAt(i);
            setTimeout(function() {
                typeWriter(text, i + 1);
            }, 10); // Adjust typing speed by changing the delay (in milliseconds)
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
