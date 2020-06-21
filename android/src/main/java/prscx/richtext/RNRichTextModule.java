
package prscx.richtext;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;

import org.wordpress.aztec.demo.MainActivity;

public class RNRichTextModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;
  private static final int EDITOR_REQUEST = 1;

  private Callback mDoneCallback;

  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
      if (requestCode == EDITOR_REQUEST) {

        if (mDoneCallback != null) {
          if (resultCode == Activity.RESULT_CANCELED) {
          } else {
            mDoneCallback.invoke(intent.getExtras().getString("content"));
          }
        }

        mDoneCallback = null;
      }
    }
  };

  public RNRichTextModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;

    reactContext.addActivityEventListener(mActivityEventListener);
  }

  @Override
  public String getName() {
    return "RNRichText";
  }

  @ReactMethod
  public void Show(final ReadableMap props, final Callback onDone) {
    String title = props.getString("title");
    String content = props.getString("content");

    mDoneCallback = onDone;

    Intent intent = new Intent(getCurrentActivity(), MainActivity.class);
    intent.putExtra("title", title);
    intent.putExtra("content", content);

    getCurrentActivity().startActivityForResult(intent, 1);
  }
}