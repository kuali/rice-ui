# Rice UI

## Setup

Update `UifPageViewDefinitions.xml`, replacing:

```xml
<bean id="Uif-KbootTheme-parentBean" abstract="true" parent="Uif-RiceViewTheme">
  <property name="name" value="kboot"/>
</bean>
```

with the following:

```xml
<bean id="Uif-KbootTheme-parentBean" abstract="true" parent="Uif-RiceViewTheme">
  <property name="usesThemeBuilder" value="false"/>
  <property name="cssFiles">
    <list>
      <value>http://localhost:3000/assets/bundle.css</value>
    </list>
  </property>
  <property name="scriptFiles">
    <list>
      <value>themes/kboot/scripts/kboot.2.5.0-M7-SNAPSHOT.min.js</value>
    </list>
  </property>
</bean>
```

This will disable the Theme Builder, retain existing JavaScript file paths, and externally reference the new stylesheet, generated from the gulp build process.

## Install

Install npm dependencies.

```
npm install
```

## Develop

Start `krad-sampleapp` from IntelliJ. Then, run the `rice-ui` development environment.

```
gulp
```
