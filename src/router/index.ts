import Vue from "vue";
import Router from "vue-router";

const Public = () =>
  import(/* webpackChunkName: 'public' */ "@/views/Public.vue");
const Private = () =>
  import(/* webpackChunkName: 'private' */ "@/views/Private.vue");
const NotFound = () =>
  import(/* webpackChunkName: 'public' */ "@/views/NotFound.vue");

const Login = () =>
  import(/* webpackChunkName: 'public' */ "@/views/Login/Login.vue");
const ForgotPassword = () =>
  import(/* webpackChunkName: 'public' */ "@/views/Login/ForgotPassword.vue");
const ResetPassword = () =>
  import(/* webpackChunkName: 'public' */ "@/views/Login/ResetPassword.vue");
const SignUp = () =>
  import(/* webpackChunkName: 'public' */ "@/views/Login/SignUp.vue");

const Wizard = () =>
  import(/* webpackChunkName: 'wizard' */ "@/views/Wizard/Index.vue");
const WizardAbout = () =>
  import(/* webpackChunkName: 'wizard' */ "@/views/Wizard/About.vue");
const WizardUrl = () =>
  import(/* webpackChunkName: 'wizard' */ "@/views/Wizard/Url.vue");
const WizardInstallation = () =>
  import(/* webpackChunkName: 'wizard' */ "@/views/Wizard/Installation.vue");
const WizardSuccess = () =>
  import(/* webpackChunkName: 'wizard' */ "@/views/Wizard/Success.vue");
const WizardError = () =>
  import(/* webpackChunkName: 'wizard' */ "@/views/Wizard/Error.vue");
const Dashboard = () =>
  import(/* webpackChunkName: 'dashboard' */ "@/views/Dashboard.vue");

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Public,
      redirect: "login",
      children: [
        {
          path: "login",
          component: Login
        },
        {
          path: "forgot-password",
          component: ForgotPassword
        },
        {
          path: "reset-password",
          component: ResetPassword
        },
        {
          path: "sign-up",
          component: SignUp
        },
        {
          path: "/wizard",
          component: Wizard,
          redirect: "/wizard/about",
          children: [
            {
              path: "about",
              component: WizardAbout,
              meta: { step: 0 }
            },
            {
              path: "url",
              component: WizardUrl,
              meta: { step: 1 }
            },
            {
              path: "installation",
              component: WizardInstallation,
              meta: { step: 2 }
            },
            {
              path: "success",
              component: WizardSuccess
            },
            {
              path: "error",
              component: WizardError
            }
          ]
        }
      ]
    },
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

export default router;
