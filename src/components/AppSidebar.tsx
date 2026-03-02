import {
  Home, Wrench, Brain, CookingPot, Lightbulb, Gamepad2,
  Trophy, Sparkles, ChevronRight, CheckCircle2, Server, Shield, Code2,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { getProgress, getCompletionPercentage, type ModuleId } from "@/lib/progress";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarHeader, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home, moduleId: null },
  { title: "Lovable", url: "/tools/lovable", icon: Wrench, moduleId: "tool-lovable" as ModuleId, emoji: "💖" },
  { title: "ChatGPT", url: "/tools/chatgpt", icon: Wrench, moduleId: "tool-chatgpt" as ModuleId, emoji: "🤖" },
  { title: "Claude", url: "/tools/claude", icon: Wrench, moduleId: "tool-claude" as ModuleId, emoji: "🎭" },
  { title: "Glean", url: "/tools/glean", icon: Wrench, moduleId: "tool-glean" as ModuleId, emoji: "🔍" },
  { title: "Coding Tools", url: "/coding-tools", icon: Code2, moduleId: null },
  { title: "Key Concepts", url: "/concepts", icon: Brain, moduleId: "concepts" as ModuleId },
  { title: "Recipes", url: "/recipes", icon: CookingPot, moduleId: "recipes" as ModuleId },
  { title: "Project Ideas", url: "/ideas", icon: Lightbulb, moduleId: "ideas" as ModuleId },
  { title: "Prompt Playground", url: "/playground", icon: Gamepad2, moduleId: "playground" as ModuleId },
  { title: "Tech Stack", url: "/tech-stack", icon: Server, moduleId: null },
  { title: "Badges", url: "/badges", icon: Trophy, moduleId: null },
  { title: "How I Built This", url: "/how-i-built-this", icon: Sparkles, moduleId: "how-i-built-this" as ModuleId },
  { title: "Admin", url: "/admin", icon: Shield, moduleId: null },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const progress = getProgress();
  const pct = getCompletionPercentage();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        {!collapsed && (
          <div>
            <h2 className="font-display text-lg font-bold text-sidebar-primary">🎮 AI Tool Trainer</h2>
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs text-sidebar-foreground/60 mb-1">
                <span>Progress</span>
                <span>{pct}%</span>
              </div>
              <Progress value={pct} className="h-2" />
            </div>
          </div>
        )}
        {collapsed && <span className="text-xl">🎮</span>}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isComplete = item.moduleId ? progress[item.moduleId]?.completed : false;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className="hover:bg-sidebar-accent/50 flex items-center gap-2"
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      >
                        {item.emoji ? (
                          <span className="text-base">{item.emoji}</span>
                        ) : (
                          <item.icon className="h-4 w-4" />
                        )}
                        {!collapsed && (
                          <>
                            <span className="flex-1">{item.title}</span>
                            {isComplete && <CheckCircle2 className="h-4 w-4 text-accent" />}
                          </>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!collapsed && (
          <p className="text-xs text-muted-foreground text-center">
            Built with 💖 using Lovable
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
