import * as React from "react";
import { Moment } from "moment";
import moment from "moment";
import * as g from "dreamspell-math";
import { GraphicTheme } from "consts/GraphicTheme";
import config from "config";

export interface IAppContext {
  moment: Moment;
  gdate: g.DreamDate;
  inc: () => void;
  dec: () => void;
  setDate: (date: Moment) => void;
  theme: GraphicTheme;
  setTheme: (theme: GraphicTheme) => void;
}

export const AppContext = React.createContext<IAppContext | null>(null);

export interface IWithAppContextProps {
  context: IAppContext;
}

export function withAppContext<P extends {}>(
  WrappedComponent: any | React.ComponentType<P & IWithAppContextProps>
) {
  // ...and returns another component...
  return class extends React.Component<
    Pick<P, Exclude<keyof P, keyof IWithAppContextProps>>,
    {}
    > {
    static displayName = `withAppContext(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    render() {
      return (
        <AppContext.Consumer>
          {context => <WrappedComponent {...this.props} context={context!} />}
        </AppContext.Consumer>
      );
    }
  };
}

const DefaultTheme = config.ktoty ? GraphicTheme.Tzolkine : GraphicTheme.Classic;

export class AppContextProvider extends React.Component<{}, IAppContext> {
  constructor(props: any) {
    super(props);

    this.state = {
      date: new Date(),
      moment: moment(),
      gdate: new g.DreamDate(moment()),
      theme: DefaultTheme,
      ...this
    } as IAppContext;
  }

  inc = () => {
    const date = this.state.moment.add(1, "d");
    this.setDate(date);
  };

  dec = () => {
    const date = this.state.moment.add(-1, "d");
    this.setDate(date);
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
      theme
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
