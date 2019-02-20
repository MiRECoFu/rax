import Host from './host';
import EmptyComponent from './empty';
import NativeComponent from './native';
import TextComponent from './text';
import CompositeComponent from './composite';
import FragmentComponent from './fragment';
import Hook from '../debug/hook';

export default function inject({ driver, measurer }) {
  // Inject component class
  Host.Empty = EmptyComponent;
  Host.Native = NativeComponent;
  Host.Text = TextComponent;
  Host.Fragment = FragmentComponent;
  Host.Composite = CompositeComponent;

  // Inject render driver
  Host.driver = driver || Host.driver;

  if (!Host.driver) {
    throw Error('Driver not found.');
  }

  if (process.env.NODE_ENV !== 'production') {
    // Inject devtool hook
    Host.hook = Hook;

    // Inject performance measurer
    Host.measurer = measurer;
  }
}
