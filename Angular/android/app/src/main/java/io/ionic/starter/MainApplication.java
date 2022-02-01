package io.ionic.starter;

import android.app.Application;
import com.moengage.capacitor.MoEInitializer;
import com.moengage.core.LogLevel;
import com.moengage.core.MoEngage;
import com.moengage.core.config.LogConfig;
import com.moengage.core.config.FcmConfig;

/**
 * @author Arshiya Khanum
 */
public class MainApplication extends Application {

  @Override public void onCreate() {
    super.onCreate();
    MoEngage.Builder moEngage =
      new MoEngage.Builder(this, "YOUR_APP_ID")
      .configureLogs(new LogConfig(LogLevel.VERBOSE))
      .configureFcm(new FcmConfig(true));

    MoEInitializer.INSTANCE.initialize(this, moEngage);
  }
}
