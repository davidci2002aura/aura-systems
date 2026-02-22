/**
 * Analytics utility for tracking user interactions
 * Currently prepared for future integration with analytics providers
 */

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

class Analytics {
  private enabled: boolean;

  constructor() {
    this.enabled = import.meta.env.PROD;
  }

  /**
   * Track a page view
   */
  pageView(path: string): void {
    if (!this.enabled) return;

    // TODO: Integrate with analytics provider (Google Analytics, Plausible, etc.)
    console.log('Page view:', path);
  }

  /**
   * Track a custom event
   */
  trackEvent({ category, action, label, value }: AnalyticsEvent): void {
    if (!this.enabled) return;

    // TODO: Integrate with analytics provider
    console.log('Event:', { category, action, label, value });
  }

  /**
   * Track form submission
   */
  trackFormSubmit(formName: string): void {
    this.trackEvent({
      category: 'Form',
      action: 'Submit',
      label: formName,
    });
  }

  /**
   * Track outbound link click
   */
  trackOutboundLink(url: string): void {
    this.trackEvent({
      category: 'Outbound',
      action: 'Click',
      label: url,
    });
  }
}

export const analytics = new Analytics();
