export const data = {
    startMessage: {
        isUser: false,
        text: "Olá!",
        date: new Date()
    },
    loginMessage: {
        isUser: false,
        text: "Hello! To continue, please log in to your account.",
        date: new Date()
    },
    userLoginMessage: {
        isUser: false,
        text: "To log in or create an account, please enter your username.",
        date: new Date()
    },
    getPasswordMessage: {
        isUser: false,
        text: "Please enter your password to complete the login.",
        date: new Date()
    },
    notFoundUserMessage: {
        isUser: false,
        text: "Now, please enter a password to complete the registration.",
        date: new Date()
    },
    errorMessage: {
        isUser: false,
        text: "Something went wrong, please refresh the page and try again.",
        date: new Date()
    },
    logedMessage: {
        isUser: false,
        text: "Login successful.",
        date: new Date()
    },
    whrongPassword: {
        isUser: false,
        text: "The password entered is incorrect.",
        date: new Date()
    },
    registeredMessage: {
        isUser: false,
        text: "User registered successfully.",
        date: new Date()
    },
    helloMessage: {
        isUser: false,
        text: "Hello, how can I assist you today?",
        date: new Date()
    },
    loanMessage: {
        isLoan: true,
        isUser: false,
        text: "Here are some useful options.",
        date: new Date()
    },
    genericMessage: {
        isUser: false,
        text: "Sorry, I don't have an answer for that right now.",
        date: new Date()
    },
    goodbyeMessage: {
        isUser: false,
        text: "Goodbye!",
        date: new Date()
    },
}

export const topics = [
    {
        title: 'Do you want to apply for a loan?',
        content: 'More information about applying for a loan.',
        link: {
            text: 'Example Website',
            url: 'https://www.example.com',
        },
    },
    {
        title: 'Loan conditions',
        content: 'Detailed loan conditions.',
        link: {
            text: 'Example Website',
            url: 'https://www.example.com',
        },
    },
    {
        title: 'Help',
        content: 'Here you can find helpful information: ',
        link: {
            text: 'Example Website',
            url: 'https://www.example.com',
        },
    },
];