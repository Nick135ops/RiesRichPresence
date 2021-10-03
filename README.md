# RiesRichPresence

# Read below on how to get started.

> In order to get started, **you will be needing to few things to set up** your Rich Presense Client.
## 1. `Client ID`

> **Note: If you haven't created a Application for your Rich Presence kindly check [this](https://media.discordapp.net/attachments/892820309269434390/893879172475269181/rSsKc2HS.gif?width=738&height=355) out**.

+ **Head over to the [Developer Portal](https://discord.com/developers/applications)**, and click on your desired application that you want to use for the Rich Presence.

+ After you click on your application you should be able to see a tab saying `Application ID`, right below that tab you should be able to see a _Copy_ button, click on it and poaste it in `config.json` file.

- Attachment:    
![Copy Application ID](https://media.discordapp.net/attachments/892820309269434390/893882046441730108/unknown.png?width=122&height=65 "Click on Copy button")

- Your `config.json` file should look like this ![config.json file](https://media.discordapp.net/attachments/892820309269434390/893887797289713704/unknown.png?width=313&height=164 "Paste your Cliend ID here")

## 2. `Setting up text on your RPC & using it`

> This isn't the last step yet because some of you guys might want to also use images in your RPC ( Rich Presence Client ) but for the ones who only want texts on their RPC this must be the last step for you.

+ If you try and run the RPC after following the steps given above by typing `node index.js` on your command prompt, it show something familiar to the attachment given below. 

+ Attachment:    
![Simple RPC](https://media.discordapp.net/attachments/892820309269434390/893921740454002748/unknown.png?width=166&height=50 "This is a simple RPC.")

### 1. Adding a *state* to your RPC

+ Open your `config.json` file and edit the `state` variable to whatever you want.

+ `config.json` file: ![state variable](https://media.discordapp.net/attachments/892820309269434390/893927166792826880/unknown.png?width=265&height=168 "Added a state variable")

+ Attachment:    
![Added state to your RPC](https://media.discordapp.net/attachments/892820309269434390/893924726441910312/unknown.png?width=145&height=54 "Added state to the RPC")

### 2. Adding a *details* to your RPC

+ Now the `details` variable, in your `config.json` file you will see a variable named `state` edit it to whatever you want, check the attachments given below.

+ `config.json` file: ![Added details variable in config.json file](https://media.discordapp.net/attachments/892820309269434390/894129787319250944/unknown.png?width=308&height=163 "Added state variable in config.json file")

+ Your RPC will look like this: ![Added details variable](https://media.discordapp.net/attachments/892820309269434390/894136093627252776/unknown.png?width=170&height=53 "Added details variable")

### 3. Adding Buttons to your RPC

+ We need two things for a button to get working, first is `Button Label` and a valid `Link`.

> **Note: The buttons will not work if you try to click on your desktop client, tell a friend to test it out if the button is working**.

#### 1. Setting up Button Label

+ Label is basically a button label text which can't be kept empty. Check attachments given below.

+ `config.json` file: ![Added a label](https://media.discordapp.net/attachments/892820309269434390/894242558400688148/unknown.png?width=304&height=165 "Added Label")

#### 2. Setting up Button Link

+ Link is basically a link or we can say a url to some other website, for test purposes I'm using `https://button.link` you can change it to whatever you want. Attachment given below.

+ `config.json` file: ![Added a link](https://media.discordapp.net/attachments/892820309269434390/894242351587930132/unknown.png?width=303&height=164 "Added a link to the button")

+ After you're done setting up both of the things your button must show up on discord like the attachment given below.

+ Attachment:    
![Added a Button](https://media.discordapp.net/attachments/892820309269434390/894245114216583249/unknown.png?width=171&height=68 "Button")

## 3. `Adding Images`

+ This might sound a bit hard for the ones who're new but trust me its not.

+ Lets set up some images first *( If you already have images setup on the Rich Presence Tab ignore this step and move on to the next one. )*

+ ### Adding images to your Application
+ +  Head over to [Developers Portal](https://discord.com/developers/applications) again and choose the application you want for your RPC and click on `Rich Presence` tab.

+ + Refer to the Attachment below on how to add images.

+ + Attachment: ![Adding images to your RPC](https://cdn.discordapp.com/attachments/892820309269434390/894257375207387218/iUVam1fF.gif "Adding images to your RPC")

+ ### Using images in your RPC

+ + Alright so in this last step of setting up images all you need to do is set the image name in your `config.json` file, refer to the attachment below.

- For setting Large Image Icon/Small Image Icon and the text to show when mouse is hovered on it, refer to attachment below.

+ + `config.json` file: ![Large Image setup](https://media.discordapp.net/attachments/892820309269434390/894265053610651770/unknown.png?width=329&height=167 "Large Image setup")

+ + Hovered text example 1: ![Hovered text example](https://media.discordapp.net/attachments/892820309269434390/894269487468138506/unknown.png?width=169&height=63)

+ + Hovered text example 2: ![Hovered text example](https://media.discordapp.net/attachments/892820309269434390/894269598822723604/unknown.png?width=170&height=62)

> Note: *If your RPC doesn't show up images just make sure that they show up on your Rich Presence tab after adding the images*.

## 4. Enjoy your RPC now :)

+ Your RPC should show something like this after you're done setting up everything: ![RPC](https://media.discordapp.net/attachments/892820309269434390/894264273621114901/unknown.png?width=166&height=86)

+ That was it I hope you found this useful and easy, if not or if I should improve this more, do let me know.

> # Support Me

> + [Discord Server](https://discord.gg/XuAC6Uawam)

> + [My Bot](https://discord.com/api/oauth2/authorize?client_id=843116344957730817&permissions=261993005047&scope=bot)