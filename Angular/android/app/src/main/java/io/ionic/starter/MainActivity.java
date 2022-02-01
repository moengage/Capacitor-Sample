package io.ionic.starter;

import android.content.res.Configuration;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.moengage.capacitor.MoECapacitorCorePlugin;
import com.moengage.capacitor.MoECapacitorHelper;
import com.moengage.core.internal.logger.Logger;

public class MainActivity extends BridgeActivity {

  @Override protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    
    //Register MoEngage Capacitor Plugin
    registerPlugin(MoECapacitorCorePlugin.class);
  }

  @Override public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    Logger.d(" onConfigurationChanged() : ");
    MoECapacitorHelper.INSTANCE.onConfigurationChanged();
  }
}