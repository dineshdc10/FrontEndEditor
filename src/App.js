import React from 'react';
// Import Brace and the AceEditor Component
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/mode/javascript';
import 'brace/mode/xml';
import 'brace/mode/sass';
import 'brace/mode/markdown';
import 'brace/mode/mysql';
import 'brace/mode/json';
import 'brace/mode/handlebars';
import 'brace/mode/elixir';
import 'brace/mode/typescript';


// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/monokai';
import 'brace/theme/github';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class App extends React.Component {



  constructor(props, context) {
    super(props, context);
    var width = this.getWidth();
    var height = this.getHeight();
    const languages = [
      "javascript",
      "java",
      "python",
      "xml",
      "ruby",
      "sass",
      "markdown",
      "mysql",
      "json",
      "html",
      "handlebars",
      "golang",
      "csharp",
      "elixir",
      "typescript",
      "css"
    ];
    this.state = {
      value: '',
      darkmode: true,
      thememode: "monokai",
      height,
      width,
      codevalue: '',
      languages: languages,
      selectedLanguage: "html"
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }

  resizeListener = () => {
    var width = this.getWidth();
    var height = this.getHeight();
    this.setState({
      width,
      height
    })
  }

  onRun = () => {
    var codevalue = this.state.value;
    this.setState({
      codevalue
    })
  }

  onChange = (newValue) => {
    this.setState({
      value: newValue
    })
  }

  onLangChange = (event) => {
    this.setState({
      selectedLanguage: event.target.value
    })
  }

  onThemeChange = () => {
    var darkmode = !this.state.darkmode;
    var thememode = "github"
    if (darkmode) {
      thememode = "monokai"
    } else {
      thememode = "github"
    }
    this.setState({
      thememode,
      darkmode
    })
  }

  downloadToTxtFile = () => {
    const el = document.createElement("a");
    var textcode = this.state.value;
    const file = new Blob([textcode], { type: 'text/plain' });
    el.href = URL.createObjectURL(file);
    el.download = "download.txt";
    document.body.appendChild(el);
    el.click();
  }

  getWidth = () => {
    var width = window.innerWidth;
    if (width > 1920) {
      width = (width - 400) / 2;
    }
    else if (width > 1280) {
      width = (width - 300) / 2;
    }
    else if (width > 960) {
      width = (width - 200) / 2;
    }
    else if (width > 600) {
      width = (width - 150) / 2;
    }
    else {
      width = width - 50;
    }
    console.log(width + "px")
    return width + "px";

  }

  getHeight = () => {
    var width = window.innerWidth - 800;
    var heigth = window.innerHeight;
    if (width > 1920) {
      //
    }
    else if (width > 1280) {
      //
    }
    else if (width > 960) {
      //
    }
    else if (width > 600) {
      heigth = heigth / 2;
    }
    else {
      heigth = heigth / 2;
    }
    console.log(heigth)
    return heigth + "px";
  }

  render() {
    return (
      <Container maxWidth="xl" style={this.state.darkmode ? { backgroundColor: '#404452' } : { backgroundColor: '#ffffff' }}>
        <Grid container spacing={3} style={{ height: window.innerHeight }}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} style={{ display: "flex", alignItems: "center" }}>
                <AppBar position="static" color={this.state.darkmode ? 'secondary' : 'primary'}
                  style={this.state.darkmode ? { backgroundColor: '#404452' } : { backgroundColor: '#1976d2' }}>
                  <Toolbar>
                    <Grid container>
                      <Grid item xs={12} sm={6} md={6} style={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h6">
                          DC FrontEnd Editor
                        </Typography>
                        <Button
                          endIcon={<DoubleArrowIcon />}
                          onClick={this.onRun}
                          style={{ marginLeft: 20, color: '#fff' }}
                        >
                          Run
                        </Button>
                      </Grid>
                      <Grid item xs={9} sm={6} md={6}>
                        <Button
                          endIcon={<BrightnessMediumIcon />}
                          onClick={this.onThemeChange}
                          style={{ marginLeft: 20, color: '#fff', float: 'right' }}
                        >
                          {this.state.darkmode ? "Light Mode" : "Dark Mode"}
                        </Button>
                        <Button
                          endIcon={<SaveIcon />}
                          onClick={this.downloadToTxtFile}
                          style={{ color: '#fff', float: 'right' }}
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </Toolbar>
                </AppBar>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AceEditor
              placeholder="Type your code here..... Happy Coding..."
              mode={this.state.selectedLanguage}
              theme={this.state.thememode}
              name="blah2"
              onChange={this.onChange}
              value={this.state.value}
              fontSize={14}
              showPrintMargin={false}
              showGutter={true}
              highlightActiveLine={true}
              height={this.state.height}
              width={this.state.width}
              setOptions={{
                useWorker: true,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <iframe srcDoc={this.state.codevalue} height={this.state.height} style={{ backgroundColor: '#ffffff' }}
              width={this.state.width} name="iframe_code" title="Code Visual"></iframe>
          </Grid>
          <Grid item xs={12} sm={12} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <i style={this.state.darkmode ? { color: '#ffffff' } : { color: '#404452' }}> Made with ❤️ by
              <a href="https://www.linkedin.com/in/dineshdc7"
                style={this.state.darkmode ? { color: 'hotpink', textDecoration: 'none' } :
                  { color: 'red', textDecoration: 'none' }}> <b>Dinesh Choudhary</b></a></i>
          </Grid>
        </Grid>
      </Container >
    );
  }
}
