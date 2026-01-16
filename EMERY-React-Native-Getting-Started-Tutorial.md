# React Native Getting Started

## Note: I added extra information in each section so I can just refer back to this document instead of having to search all the time.

Read and complete the activities on the following sections of
[this tutorial](https://reactnative.dev/docs/getting-started)

- Introduction
- Core Components and Native Components
- React Fundamentals
- Handling Text Input
- Using a ScrollView
- Using ListViews
- TroubleShooting
- Platform-Specific Code

### Question 1
Why do you think they named it React **Native** (what is the significance of the word 'Native')?
```md
It uses React and the app platforms NATIVE capabilities. React Native has these core components that change based on the native capabilities of the system its operating on. For instance, the <Text> React Native component changes to <TextView> on Android, <UITextView> on iOS, and <p> on the Web. It makes it so you can use a 'generic' term and then once it goes to a platform the platform changes out the generic term for the correct term. (if I am understanding how this works)

(see the table under the "Core Components" section at https://reactnative.dev/docs/intro-react-native-components for a quick view of some of the examples) 
```

### Question 2
Why would you want to create **custom components** in a React Native Project?
```md
In the example, they made a custom component by nesting core components inside of a view. I gather that a custom component is just a more complicated core component?

Once you create one, you can reuse it over and over. So instead of long blocks of code you could just call <Cat /> instead.
```

### Question 3
Under what circumstances would you make a variable a **state** varialbe? When might you NOT want to make a variable a state variable?
```md
"State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!" from https://reactnative.dev/docs/intro-react?language=typescript under the "State" section.

"Calling useState does two things:

 - it creates a “state variable” with an initial value
 - it creates a function to set that state variable’s value 

It can be handy to think of the pattern as [<getter>, <setter>] = useState(<initialValue>)." - Modified a little from the same section as above.

You would want to make something a state variable if you expect it to change over time. 

If you expect something to be static or unchanging then you would not want to make it a state variable. Google also suggests that overusing state variables can cause performace issues.
```

### Question 4
T/F - TextInputs have an **onChange** prop that you can use to handle state changes when the data in a TextInput changes.
```md
**T**

This section was a little convoluted for me.

I wasn't sure from just reading the article so I did some googling and there is an onChange prop and and onChangeText prop. It was explained the the onChange is a state change and the onChangeText is triggered when the onChange state changes (if I understoof it correctly).
```

### Question 5
When would you use a ScrollView?
```md
From the site itself (https://reactnative.dev/docs/using-a-scrollview) "The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen."

When you want all the components to render at once so they can scroll through all of them. It sounds like this could cause some massive performance issues with larger components or a ton of components at once.
```

### Question 6
T/F - FlatLists only render elements that are currently visible on the screen.
```md
**T**

FlatList component requires two props: data and renderItem

- data is the source of information for the list
- renderItem takes one item from the source and returns a formatted component to render.

Example:

 <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
  />
```