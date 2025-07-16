import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Moon, 
  Smartphone,
  LogOut,
  ChevronRight,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'

export function ProfilePage() {
  return (
    <div className="space-y-6 pb-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/api/placeholder/64/64" alt="Profile" />
              <AvatarFallback className="bg-primary-100 text-primary-700 text-lg font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-slate-900">John Doe</h2>
              <p className="text-slate-600">Supply Chain Manager</p>
              <Badge variant="secondary" className="mt-1">
                Premium Account
              </Badge>
            </div>
            
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-slate-600">
              <Mail className="w-4 h-4 mr-2" />
              john.doe@company.com
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <Phone className="w-4 h-4 mr-2" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <MapPin className="w-4 h-4 mr-2" />
              New York, NY
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-slate-900">247</div>
            <div className="text-sm text-slate-600">Orders Managed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-slate-900">98%</div>
            <div className="text-sm text-slate-600">Success Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-slate-900">15</div>
            <div className="text-sm text-slate-600">Warehouses</div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <User className="w-5 h-5 mr-2" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Settings className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium">General Settings</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium">Privacy & Security</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Smartphone className="w-5 h-5 mr-2" />
              App Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-4 h-4 text-slate-500" />
                <div>
                  <div className="text-sm font-medium">Push Notifications</div>
                  <div className="text-xs text-slate-500">Get alerts for important updates</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Moon className="w-4 h-4 text-slate-500" />
                <div>
                  <div className="text-sm font-medium">Dark Mode</div>
                  <div className="text-xs text-slate-500">Switch to dark theme</div>
                </div>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-4 h-4 text-slate-500" />
                <div>
                  <div className="text-sm font-medium">Offline Mode</div>
                  <div className="text-xs text-slate-500">Cache data for offline access</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardContent className="p-4">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <span>Help & Support</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <span>Terms of Service</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <span>Privacy Policy</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card>
          <CardContent className="p-4">
            <Button variant="destructive" className="w-full justify-start">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}