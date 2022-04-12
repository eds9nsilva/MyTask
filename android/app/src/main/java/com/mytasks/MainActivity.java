package com.mytasks;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Incluir esse import
import android.os.Bundle; // Incluir esse import

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "mytasks";
  }
}
