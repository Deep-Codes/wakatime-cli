<br />
<p align="center">
    <img src="media/logo.svg" alt="Logo" width="300" >
  </a>
</p>

## 🚀 Getting Started

### 👨🏽‍💻 Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- Wakatime Account

### 🕹 Installation

1. Get your Wakatime API Key from [Here](https://wakatime.com/settings/account)

2. Install Via `npm`
   ```sh
   npm install -g @deepcodes/wakatime-cli
   ```

## 🧬 Usage

- #### Options:

```sh
❯ wakatime-cli -h
Usage: wakatime-cli [options]

Options:
  -v, --vers              output the current version
  -k, --apiKey <type>     Enter Your Wakatime APIKEY
  -r, --remove            Remove Your saved API_KEY
  -l, --language          Coding Data of Languages in Last 7days
  -a, --all               All Time Since Today
  -g, --goals             Coding Goals Meet If Set Up
  -d, --dashboard <type>  Coding Dashboard of Specific Duration
  -h, --help              display help for command
```

- #### Save API-KEY

Copy Your `Wakatime APIKEY`:

This will Save your APIKEY.

```sh
 wakatime-cli -k <API_KEY>
```

If it's Saved it should show this:

<img src="media/hello.png" alt="Logo" width="300" >

Now that it's Saved You can get your Wakatime Stats Rightaway🚀

- #### Language Stats

Gives Stats of Language of last 7days

```sh
wakatime-cli -l
```

<img src="media/lang.png" alt="Logo" width="300" >

- #### Gives Cumulative Coding Time

```sh
wakatime-cli -a
```

<img src="media/all.png" alt="Logo" width="300" >

- #### Dashboard

```
wakatime-cli -d <type>
```

`<type>` MUST be one of the following:
-last_7_days
-last_30_days
-last_6_months
-last_year

<img src="media/dash.png" alt="Logo" width="300" >

- #### Coding Goals

You must have Coding Goals Enabled For this:

```
wakatime-cli -g
```

<img src="media/goal.png" alt="Logo" width="300" >

- #### Remove the Saved API-KEY

```sh
wakatime-cli -r
```

<img src="media/rm.png" alt="Logo" width="400" >

More Feature Will be Added Soon.
If you need some Feel Free to Open an Issue.

## 🏗Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 License

Distributed under the MIT License. See `LICENSE` for more information.

## 😇 Contact

Twitter - [@DeepankarBhade](https://twitter.com/DeepankarBhade)

<!-- ACKNOWLEDGEMENTS -->

## 📖 Acknowledgements

- [Wakatime](https://wakatime.com/dashboard)
- [Wakatime API](https://wakatime.com/developers)
