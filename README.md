# Weather Application ⛈️

# <span style = "color:skyblue;"> Description </span>

<span style="color: skyblue; font-style: italic;">This a project about weather conditon in different places across the globe, in which You can check the weather of any city / country. This application will tell you the Todays weather and next 5 days weather with temprature. So next time if you go somewhere check weather in advanced and be prepared. </span>

# Have a Look of project [👉 Link](https://vandanafuloria.github.io/weather-update/)

## Images

![desktop view](./assets/)

# Installation

1. Clone this repository

```
git clone https://github.com/vandanafuloria/weather-update.git
```

2. To install all the dependecies

```
 npm install
```

3. Build the project

```
npm run build
```

4. Dev Server start on `http://localhost:8080`

```
npm run start
```

# Bundler : Webpack configuration

```
npm install --save-dev webpack webpack-cli html-loader style-loader css-loader file-loader
```

- html loader
- style loader
- css loader
- file loader

# Api Used

Method `GET`, `opneweathermap.org`

1. `Current weather data api`

```
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid${key}
```

2. `5 Day / 3 Hour Forecast`

```
https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid${key}
```

## Contribution

1. Fork this repo.
2. Create your branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request.

## Contact

Feel free to reach out to me via [email](vandanafuloria02@gmail.com) if you encounter any issue.
