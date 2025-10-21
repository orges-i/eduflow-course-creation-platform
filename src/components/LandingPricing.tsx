import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for individual creators",
    features: [
      "Up to 5 courses",
      "Basic content blocks",
      "Mobile responsive",
      "Web publishing",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For professional educators",
    features: [
      "Unlimited courses",
      "All content blocks",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
      "LMS export"
    ],
    highlighted: true
  },
  {
    name: "Team",
    price: "$99",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom templates",
      "SSO integration",
      "Dedicated support",
      "API access"
    ],
    highlighted: false
  }
];

export default function LandingPricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-8 border-2 ${
                plan.highlighted
                  ? 'border-gray-900 bg-gray-900/5 shadow-xl'
                  : 'border-gray-200 bg-white'
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-5xl">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <Button 
                className="w-full mb-6 bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-white"
              >
                Start Free Trial
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
