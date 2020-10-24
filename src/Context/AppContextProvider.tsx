import * as React from "react";
import { Moment } from "moment";
import moment from "moment";
import * as g from "dreamspell-math";
import { GraphicTheme } from "consts/GraphicTheme";
import { useContext } from "react";


export interface IAppContext {
  moment: Moment;
  gdate: g.DreamDate;
  inc: () => void;
  dec: () => void;
  setDate: (date: Moment) => void;
  theme: GraphicTheme;
  setTheme: (theme: GraphicTheme) => void;
  set: (context: IAppContext) => void;
  lawoftime?: boolean,
  ktoty?: boolean,
  darkTheme?: boolean,
}

export const AppContext = React.createContext<IAppContext | null>(null);

export interface IWithAppContextProps {
  context: IAppContext;
}

export const useAppContext = () => useContext(AppContext)!;

export const isKtotyHosted = () => /(ktoty\.?|-kt)/gi.test(window.location.href);

export const defaultTheme = () => {
  const ktoty = isKtotyHosted();
  const defaultTheme = ktoty ? GraphicTheme.Tzolkine : GraphicTheme.Classic;
  return defaultTheme;
}

export class AppContextProvider extends React.Component<{}, IAppContext> {
  constructor(props: any) {
    super(props);
    // check by url for ktoty customization
    const ktoty = /(ktoty\.?|-kt)/gi.test(window.location.href);
    const lawoftime = !ktoty;
    const darkTheme = lawoftime;

    this.state = {
      moment: moment(),
      gdate: new g.DreamDate(moment()),
      theme: defaultTheme(),

      lawoftime,
      ktoty,
      darkTheme,
      ...this
    } as IAppContext;

    this.setTheme(defaultTheme());
  }

  inc = () => {
    const date = this.state.moment.add(1, "d");
    this.setDate(date);
  };

  dec = () => {
    const date = this.state.moment.add(-1, "d");
    this.setDate(date);
  };
  set = (state: Partial<IAppContext>) => {
    this.setState(state as any);
  };

  setDate = (date: Moment) => {
    var gdate = new g.DreamDate(date);

    this.setState({
      moment: moment(date),
      gdate
    });
  };

  setTheme = (theme: GraphicTheme) => {
    console.log(`Theme cahnged to ${theme}`)
    this.setState({
      theme,
      ktoty: theme === GraphicTheme.Tzolkine,
      lawoftime: theme !== GraphicTheme.Tzolkine,
      darkTheme: theme === GraphicTheme.Classic
    });
  };
  public render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}