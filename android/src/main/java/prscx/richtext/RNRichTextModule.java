
package prscx.richtext;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;

import org.wordpress.aztec.demo.MainActivity;

public class RNRichTextModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNRichTextModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNRichText";
  }

  @ReactMethod
  public void Show(final ReadableMap props, final Callback onDone, final Callback onCancel) {
    Intent intent = new Intent(getCurrentActivity(), MainActivity.class);

    getCurrentActivity().startActivityForResult(intent, 1);
  }
}