import { Tooltip } from "@/components/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";

const TooltipPage = () => {
  const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip"

<Tooltip content="This is a tooltip" position="top">
  <button>Hover me</button>
</Tooltip>`;

  const positionsCode = `
<Tooltip content="Top tooltip" position="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Left tooltip" position="left">
  <button>Left</button>
</Tooltip>

<Tooltip content="Right tooltip" position="right">
  <button>Right</button>
</Tooltip>`;

  const triggersCode = `
<Tooltip content="Hover to see" trigger="hover">
  <button>Hover Trigger</button>
</Tooltip>

<Tooltip content="Click to see" trigger="click">
  <button>Click Trigger</button>
</Tooltip>

<Tooltip content="Focus to see" trigger="focus">
  <input placeholder="Focus me" />
</Tooltip>`;

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The element that triggers the tooltip",
    },
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "The content to display in the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The position of the tooltip relative to the trigger",
    },
    {
      prop: "trigger",
      type: '"hover" | "click" | "focus"',
      default: '"hover"',
      description: "The event that triggers the tooltip visibility",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before showing the tooltip (hover trigger only)",
    },
    {
      prop: "arrow",
      type: "boolean",
      default: "true",
      description: "Whether to show an arrow pointing to the trigger",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether to disable the tooltip",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes for the wrapper",
    },
    {
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes for the tooltip content",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          A floating label that displays information when hovering, clicking, or focusing on an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="This is a tooltip" position="top">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Hover me
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Positions</h2>
        <ComponentDemo code={positionsCode}>
          <div className="flex flex-wrap gap-8 justify-center p-8">
            <Tooltip content="Top tooltip" position="top">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Top
              </button>
            </Tooltip>

            <Tooltip content="Bottom tooltip" position="bottom">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Bottom
              </button>
            </Tooltip>

            <Tooltip content="Left tooltip" position="left">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Left
              </button>
            </Tooltip>

            <Tooltip content="Right tooltip" position="right">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Right
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Trigger Types</h2>
        <ComponentDemo code={triggersCode}>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Hover to see this tooltip" trigger="hover">
              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                Hover Trigger
              </button>
            </Tooltip>

            <Tooltip content="Click to toggle this tooltip" trigger="click">
              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                Click Trigger
              </button>
            </Tooltip>

            <Tooltip content="Focus this input to see tooltip" trigger="focus">
              <input
                type="text"
                placeholder="Focus me"
                className="px-4 py-2 border-2 rounded focus:outline-none focus:border-purple-500"
              />
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variations</h2>
        <ComponentDemo code={`
<Tooltip content="Arrow is hidden" position="top" arrow={false}>
  <button>No Arrow</button>
</Tooltip>

<Tooltip content="This tooltip is disabled" disabled={true}>
  <button>Disabled Tooltip</button>
</Tooltip>

<Tooltip content="200ms delay" position="top" delay={200}>
  <button>With Delay</button>
</Tooltip>`}>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Arrow is hidden" position="top" arrow={false}>
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                No Arrow
              </button>
            </Tooltip>

            <Tooltip
              content="This tooltip is disabled"
              disabled={true}
              position="top"
            >
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Disabled
              </button>
            </Tooltip>

            <Tooltip
              content="Appears after 500ms delay"
              position="top"
              delay={500}
            >
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                With Delay
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">With Icons</h2>
        <ComponentDemo code={`
<Tooltip content="Information icon" position="top">
  <span className="cursor-help">ℹ️</span>
</Tooltip>`}>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="This is helpful information" position="top">
              <span className="cursor-help text-2xl">ℹ️</span>
            </Tooltip>

            <Tooltip content="Warning: Important notice" position="top">
              <span className="cursor-help text-2xl">⚠️</span>
            </Tooltip>

            <Tooltip content="Help and support" position="top">
              <span className="cursor-help text-2xl">🆘</span>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
