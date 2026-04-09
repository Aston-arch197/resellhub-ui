import { useState } from "react";
import { Send, Image, Smile, Phone, MoreVertical, ArrowLeft, Check, CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
  status?: "sent" | "delivered" | "read";
}

const conversations = [
  { id: 1, name: "Sarah K.", avatar: "S", lastMsg: "Is it still available?", time: "2m ago", online: true, unread: 2 },
  { id: 2, name: "Mike R.", avatar: "M", lastMsg: "Can you do $150?", time: "1h ago", online: false, unread: 0 },
  { id: 3, name: "Emma L.", avatar: "E", lastMsg: "Perfect, let's meet!", time: "3h ago", online: true, unread: 0 },
  { id: 4, name: "David P.", avatar: "D", lastMsg: "Thanks for the quick reply", time: "1d ago", online: false, unread: 0 },
];

const initialMessages: Message[] = [
  { id: 1, text: "Hi! I'm interested in the iPhone 14 Pro Max you listed.", sender: "other", time: "10:30 AM" },
  { id: 2, text: "Is it still available?", sender: "other", time: "10:30 AM" },
  { id: 3, text: "Yes, it's still available! The phone is in excellent condition.", sender: "me", time: "10:35 AM", status: "read" },
  { id: 4, text: "Would you consider $700? I can pick it up today.", sender: "other", time: "10:38 AM" },
  { id: 5, text: "I could do $720 since it includes the original case and charger.", sender: "me", time: "10:42 AM", status: "read" },
  { id: 6, text: "Deal! Where can we meet?", sender: "other", time: "10:45 AM" },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [activeChat, setActiveChat] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "me", time: "Now", status: "sent" }]);
    setInput("");
  };

  const activePerson = conversations[activeChat];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className={`${showSidebar ? "flex" : "hidden"} md:flex flex-col w-full md:w-80 lg:w-96 border-r border-border bg-card`}>
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-bold">Messages</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv, i) => (
              <button
                key={conv.id}
                onClick={() => { setActiveChat(i); setShowSidebar(false); }}
                className={`w-full flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors border-b border-border/50 ${
                  i === activeChat ? "bg-primary/5" : ""
                }`}
              >
                <div className="relative">
                  <div className="w-11 h-11 rounded-full gradient-btn flex items-center justify-center text-sm font-bold">
                    {conv.avatar}
                  </div>
                  {conv.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-card" />}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{conv.name}</span>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMsg}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {conv.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className={`${!showSidebar ? "flex" : "hidden"} md:flex flex-col flex-1`}>
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border bg-card">
            <button onClick={() => setShowSidebar(true)} className="md:hidden p-1">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="relative">
              <div className="w-10 h-10 rounded-full gradient-btn flex items-center justify-center text-sm font-bold">
                {activePerson.avatar}
              </div>
              {activePerson.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success rounded-full border-2 border-card" />}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{activePerson.name}</p>
              <p className="text-xs text-success">{activePerson.online ? "Online" : "Offline"}</p>
            </div>
            <div className="flex gap-1">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Phone className="w-4 h-4 text-muted-foreground" /></button>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><MoreVertical className="w-4 h-4 text-muted-foreground" /></button>
            </div>
          </div>

          {/* Product reference */}
          <div className="mx-4 mt-3">
            <div className="glass-card p-3 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=80&h=80&fit=crop" alt="" className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">iPhone 14 Pro Max - 256GB</p>
                <p className="text-sm font-bold text-primary">$749</p>
              </div>
              <Link to="/product/1">
                <Button size="sm" variant="outline" className="text-xs rounded-lg">View</Button>
              </Link>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                  msg.sender === "me"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-secondary text-secondary-foreground rounded-bl-md"
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <div className={`flex items-center gap-1 mt-1 ${msg.sender === "me" ? "justify-end" : ""}`}>
                    <span className={`text-[10px] ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</span>
                    {msg.sender === "me" && msg.status === "read" && <CheckCheck className="w-3 h-3 text-primary-foreground/60" />}
                    {msg.sender === "me" && msg.status === "delivered" && <CheckCheck className="w-3 h-3 text-primary-foreground/40" />}
                    {msg.sender === "me" && msg.status === "sent" && <Check className="w-3 h-3 text-primary-foreground/40" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Typing indicator */}
          <div className="px-4 pb-1">
            <p className="text-xs text-muted-foreground italic">Sarah is typing<span className="animate-pulse">...</span></p>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Image className="w-5 h-5 text-muted-foreground" /></button>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Smile className="w-5 h-5 text-muted-foreground" /></button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button onClick={sendMessage} size="sm" className="gradient-btn rounded-xl px-4 py-2.5">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
